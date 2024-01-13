import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

export default function MultilineTextFields() {
  const [text, setText] = useState("");

  function convertToVertical(value) {
    const dict = {
      A: "ᗆ",
      B: "ϖ",
      C: "౧",
      D: "ᗜ",
      E: "ጦ",
      F: "π",
      G: "ᘏ",
      H: "エ",
      I: "𝄩",
      J: "ᓚ",
      K: "⚻",
      L: "⌐",
      M: "ᕒ",
      N: "Z",
      O: "⬭",
      P: "ᓀ",
      Q: "⌕",
      R: "ﬢ",
      S: "ഗ",
      T: "⊣",
      U: "⸦",
      V: "ᐸ",
      W: "ᓬ",
      X: "⪤",
      Y: "⤙",
      Z: "N",
      "!": "‧─",
      "?": "🝠",
    };

    const text_list = [];
    for (let i = 0; i < value.length; i++) {
      text_list.push(dict[value[i].toUpperCase()] ?? value[i]);
    }
    console.log(text_list);
    setText(text_list.join("\n"));
  }

  return (
    <Box
      component="div"
      sx={{display: "flex", justifyContent: "center", gap: "30px"}}
    >
      <TextField
        label="Input Text"
        multiline
        rows={4}
        onChange={(e) => convertToVertical(e.target.value)}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="outlined"
          startIcon={<ContentCopyIcon />}
          style={{
            width: 100,
            borderBottom: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          onClick={() => {
            const textFieldValue = document.getElementById('vertical').value;
            navigator.clipboard.writeText(textFieldValue);
          }}
        >
          Copy
        </Button>
        <TextField
          disabled
          id="vertical"
          multiline
          rows={23}
          value={text}
          style={{ width: 100, margin: 0 }} //assign the width as your requirement
          InputProps={{
            sx: {
              borderBottom: 0,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              pl: 5.2,
              fontSize: 20
            },
          }}
        />
      </Box>
    </Box>
  );
}
