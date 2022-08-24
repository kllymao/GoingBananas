import {Box,
        Button,
        Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Center({ children }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            {children}
        </div>
    );
}

const MainContent = () => {
    return (
        <div className="MainContent">
            <Box
                className="boxOne"
                sx={{
                height: 1000,
                backgroundColor: "white",
                border: 0
                }}
            >
                <Button
                    className="uploadPicButton"
                    sx={{ border: 1, height: 600, width: 500 }}
                >
                    <AddIcon />
                </Button>
            </Box>
            <Box
                className="boxTwo"
                sx={{
                height: 1000,
                border: 0
                }}
            >
                <Center>
                    <div className="allTitle">
                        <Typography
                            className="banaRecTitle"
                            variant="h3"
                            color="gray"
                            sx={{ m: 1 }}
                        >
                            <div>Let's recognize some&nbsp;</div>
                            <div className="banana">banana</div>
                            <div>! </div>
                        </Typography>
                        
                        <Typography variant="p" color="gray" sx={{ m: 1 }}>
                            Click the yellow box on your left to take your first banana picture!
                        </Typography>

                        <Box sx={{ height: 100 }} />

                        <div sx={{ m: 2 }}>
                            <StyledButton />
                        </div>
                    </div>
                </Center>
            </Box>
        </div>
    );
};

const StyledButton = () => {
    return (
        <Button
            variant="contained"
            onClick={() => {
                //this alert fucntion should be changed into leading toward the next big frame
                alert("clicked");
            }}
            size="large"
        >
            upload your banana from here!
        </Button>
    )
}