import { ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Create } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Add Todo"
                    variant="standard"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="create todo"
                                edge="end"
                                type="submit"
                            >
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}