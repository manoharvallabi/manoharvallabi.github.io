import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Fade, Grow, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import '../assets/styles/Main.scss';

interface MainProps {
  parentToChild?: {
    mode: string;
  };
}

// Apple's signature ultra-smooth fade transition
const SmoothTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Fade 
      ref={ref} 
      {...props} 
      timeout={{
        enter: 600,
        exit: 150, // Very short but smooth exit for instant feel
      }}
      easing={{
        enter: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Apple's refined ease-out
        exit: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',   // Same smooth curve for instant exit
      }}
    />
  );
});

function Main({ parentToChild }: MainProps) {
  const [open, setOpen] = useState(false);
  const mode = parentToChild?.mode || 'dark';

  // Function to detect mobile devices
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  // Function to handle resume click
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile()) {
      // Open in new tab on mobile
      window.open('/resume.pdf', '_blank');
    } else {
      // Open modal on desktop
      setOpen(true);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        // Close instantly without animation on escape
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  // Dynamic favicon based on theme
  useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        // Always use the black LB logo for consistency
        link.href = '/lblogo.svg';
      }
    };

    updateFavicon();
  }, [mode]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.postimg.cc/FzdbF2PD/Manohartest-cropped.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/manoharvallabi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/manoharvallabi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#" onClick={handleResumeClick}><DescriptionIcon/></a>
          </div>
          <h1>Manohar Vallabi</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/manoharvallabi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/manoharvallabi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#" onClick={handleResumeClick}><DescriptionIcon/></a>
          </div>
        </div>
      </div>
      {/* Resume Modal */}
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)} 
        maxWidth="md" 
        fullWidth
        TransitionComponent={SmoothTransition}
        PaperProps={{
          sx: {
            backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#000000',
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: mode === 'dark' 
              ? '0 20px 40px rgba(0, 0, 0, 0.5)' 
              : '0 20px 40px rgba(0, 0, 0, 0.15)',
            transform: 'scale(1)',
            '&.MuiDialog-paper': {
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
            '&.MuiDialog-paper.MuiDialog-paperEnter': {
              transform: 'scale(0.95)',
              opacity: 0,
            },
            '&.MuiDialog-paper.MuiDialog-paperEnterActive': {
              transform: 'scale(1)',
              opacity: 1,
            },
            '&.MuiDialog-paper.MuiDialog-paperExit': {
              transform: 'scale(1)',
              opacity: 1,
              transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
            '&.MuiDialog-paper.MuiDialog-paperExitActive': {
              transform: 'scale(0.95)',
              opacity: 0,
              transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
          }
        }}
        BackdropProps={{
          sx: {
            backgroundColor: mode === 'dark' 
              ? 'rgba(0, 0, 0, 0.8)' 
              : 'rgba(0, 0, 0, 0.5)',
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#000000',
            borderBottom: mode === 'dark' ? '1px solid #333' : '1px solid #e0e0e0',
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            padding: '20px 24px',
            fontSize: '1.5rem',
            fontWeight: 600,
          }}
        >
          My Resume
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{ 
              position: 'absolute', 
              right: 8, 
              top: 8,
              color: mode === 'dark' ? '#ffffff' : '#000000',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              '&:hover': {
                backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent 
          dividers
          sx={{
            backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#000000',
            padding: 0,
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="600px"
            style={{ 
              border: 'none',
              backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
              transition: 'background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Main;