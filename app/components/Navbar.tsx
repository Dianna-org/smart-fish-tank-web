"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Stack
      component="header"
      sx={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        minHeight: { xs: 108, sm: 112, md: 92 },
        pt: { xs: 1.4, md: 2 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "center" },
        justifyContent: { xs: "flex-start", md: "space-between" },
        gap: { xs: 1.4, md: 3 }
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: { xs: 0.75, sm: 1, md: 1.2 },
          width: { xs: "100%", md: "auto" },
          minWidth: 0
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "clamp(38px, 10vw, 52px)",
              sm: "clamp(48px, 9vw, 62px)",
              md: "clamp(62px, 5vw, 82px)",
              lg: "clamp(68px, 4.8vw, 92px)"
            },
            aspectRatio: "1 / 1",
            flexShrink: 0
          }}
        >
          <Image
            src="/logo1.png"
            alt="Smart Fish Tank"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "center"
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 950,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            fontSize: {
              xs: "1rem",
              sm: "1.22rem",
              md: "1.55rem",
              lg: "1.75rem"
            },
            textShadow: "0 10px 32px rgba(0, 0, 0, 0.36)"
          }}
        >
          Smart
          <Box component="span" sx={{ color: "#18B7FF" }}>
            Fish
          </Box>
          <Box component="span" sx={{ color: "#4F6BFF" }}>
            Tank
          </Box>
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-end" },
          gap: { xs: 0.7, sm: 1, md: 1.1 },
          width: { xs: "100%", md: "auto" },
          flexWrap: "wrap"
        }}
      >
        <Button
          component={Link}
          href="/dashboard"
          color="inherit"
          sx={{
            color: "#FFFFFF",
            fontWeight: 800,
            px: { xs: 1, sm: 1.4, md: 1.7 },
            py: { xs: 0.65, md: 0.85 },
            minWidth: "auto",
            fontSize: { xs: "0.72rem", sm: "0.8rem", md: "0.875rem" },
            borderRadius: "999px",
            whiteSpace: "nowrap",
            "&:hover": {
              background: "rgba(30, 123, 255, 0.16)",
              color: "#8DBDFF"
            }
          }}
        >
          Dashboard
        </Button>

        <Button
          component={Link}
          href="/ai"
          color="inherit"
          sx={{
            color: "#FFFFFF",
            fontWeight: 800,
            px: { xs: 1, sm: 1.4, md: 1.7 },
            py: { xs: 0.65, md: 0.85 },
            minWidth: "auto",
            fontSize: { xs: "0.72rem", sm: "0.8rem", md: "0.875rem" },
            borderRadius: "999px",
            whiteSpace: "nowrap",
            "&:hover": {
              background: "rgba(30, 123, 255, 0.16)",
              color: "#8DBDFF"
            }
          }}
        >
          AI
        </Button>

        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{
            px: { xs: 1.8, sm: 2.2, md: 2.8 },
            py: { xs: 0.8, md: 1 },
            minWidth: "auto",
            fontSize: { xs: "0.72rem", sm: "0.8rem", md: "0.875rem" },
            borderRadius: "999px",
            whiteSpace: "nowrap",
            background:
              "linear-gradient(135deg, rgba(42, 116, 255, 0.95), rgba(71, 106, 255, 0.95))",
            boxShadow: "0 14px 34px rgba(30, 123, 255, 0.28)",
            "&:hover": {
              background: "linear-gradient(135deg, #1E7BFF 0%, #2A8DFF 100%)",
              boxShadow: "0 18px 46px rgba(30, 123, 255, 0.45)"
            }
          }}
        >
          Home
        </Button>
      </Stack>
    </Stack>
  );
}