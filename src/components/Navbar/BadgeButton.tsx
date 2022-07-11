// Test -------------------------- Importing the Packages ---------------------------------
import { IconButton, Badge, Tooltip } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type BadgeButtonProps = {
  icon?: JSX.Element;
  children?: React.ReactNode;
} & React.ComponentProps<typeof IconButton> &
  React.ComponentProps<typeof Badge> &
  Omit<React.ComponentProps<typeof Tooltip>, "children">;

// Test -------------------------- The current component ----------------------------------
const BadgeButton = ({ icon, badgeContent, title }: BadgeButtonProps) => {
  return (
    <Tooltip title={title} arrow>
      <IconButton>
        <Badge badgeContent={badgeContent} color="error">
          {icon}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BadgeButton;
