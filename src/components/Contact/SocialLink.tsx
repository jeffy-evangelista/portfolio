import { IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";

type SocialLinkProps = {
  link: string;
  icon: any;
  label: string;
  color?: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  link,
  icon,
  label,
  color,
}) => {
  return (
    <Tooltip
      placement="bottom"
      hasArrow
      label={label}
      bg="white"
      color={"brand.darkGrey"}
    >
      <IconButton
        aria-label="label"
        variant={"ghost"}
        colorScheme={color}
        icon={icon}
        onClick={() => window.open(link, "_blank")}
      />
    </Tooltip>
  );
};
export default SocialLink;
