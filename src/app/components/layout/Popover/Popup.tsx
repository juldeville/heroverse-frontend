"use client";

import Box from "@mui/material/Box";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { SxProps } from "@mui/system";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { heroFavorite } from "@/app/providers/FavoritesContext";
import PopupCard from "./PopupCard";

interface PopoverProps {
  content: heroFavorite[];
}

export default function Popover({ content }: PopoverProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: "absolute",
    top: 28,
    right: 0,
    zIndex: 1,
    border: "2px solid var(--heroBlack)",
    p: 1,
    bgcolor: "var(--heroGray)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    minWidth: "150px",
    gap: "4px",
  };

  const popups = content.map((popup, i) => {
    return <PopupCard content={popup} key={i} />;
  });

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        <button type="button" onClick={handleClick} className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faHeart} className="w-[16px] text-heroYellow" />
          <div>Favorites</div>
        </button>
        {open ? (
          <Box sx={styles}>
            {popups.length > 0 ? popups : <div className="text-xs">No favorites saved</div>}
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
