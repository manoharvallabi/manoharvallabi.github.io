import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import { Dialog, DialogContent, DialogTitle, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import "../assets/styles/Main.scss";

interface MainProps {
  parentToChild?: {
    mode: string;
  };
}

const SmoothTransition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return (
    <Fade
      ref={ref}
      {...props}
      timeout={{ enter: 600, exit: 150 }}
      easing={{
        enter: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        exit: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
});

const RESUME_URL =
  "https://manohar-portfolio.s3.us-east-2.amazonaws.com/Manohar_Vallabi_Software_Engineer.pdf";

function Main({ parentToChild }: MainProps) {
  const [open, setOpen] = useState(false);
  const mode = parentToChild?.mode || "dark";

  // Keep this in sync with CSS breakpoints:
  // Mobile styles apply at max-width: 767px, tablet/desktop at min-width: 768px.
  const isMobile = () => window.innerWidth < 768;

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile()) {
      window.open(RESUME_URL, "_blank");
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) link.href = "/lblogo.svg";
  }, [mode]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="about-inner">
          <div className="image-wrapper">
            <img
              src="https://i.postimg.cc/FzdbF2PD/Manohartest-cropped.jpg"
              alt="Avatar"
              style={{ cursor: "default" }}
            />
          </div>

          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/manoharvallabi" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/v-manohar-38a0a0141/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a href="#" onClick={handleResumeClick}>
                <DescriptionIcon />
              </a>
            </div>

            <h1>Manohar Vallabi</h1>
            <p>Software Engineer</p>

            <div className="mobile_social_icons">
              <a href="https://github.com/manoharvallabi" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/v-manohar-38a0a0141/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a href="#" onClick={handleResumeClick}>
                <DescriptionIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={SmoothTransition}
        PaperProps={{
          sx: {
            backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
            color: mode === "dark" ? "#ffffff" : "#000000",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor:
              mode === "dark"
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
            color: mode === "dark" ? "#ffffff" : "#000000",
            borderBottom:
              mode === "dark" ? "1px solid #333" : "1px solid #e0e0e0",
          }}
        >
          My Resume
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: mode === "dark" ? "#ffffff" : "#000000",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
            color: mode === "dark" ? "#ffffff" : "#000000",
          }}
        >
          <iframe
            src={RESUME_URL}
            title="Resume"
            width="100%"
            height="600px"
            style={{
              border: "none",
              backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Main;
