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

const WelcomePage = (props) => {

    const {setIsCameraOpen} = props;

    return (
        <div className="MainContent">
            <Box
                className="boxOne"
                sx={{
                height: 650,
                backgroundColor: "white",
                border: 0
                }}
            >
                <Button
                    className="uploadPicButton"
                    sx={{ border: 1, height: 600, width: 500 }}
                    onClick = {() => {
                        setIsCameraOpen(true);
                    }}
                >
                    <AddIcon />
                </Button>
            </Box>
            <Box
                className="boxTwo"
                sx={{
                height: 650,
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
                            <div className="banana">bananas</div>
                            <div>! </div>
                        </Typography>
                        
                        <Typography variant="p" color="gray" sx={{ m: 1 }}>
                            Take a picture of your banana!
                        </Typography>

                        <Box sx={{ height: 100 }} />

                        {/* <div sx={{ m: 2 }}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setIsCameraOpen(true);
                                }}
                                size="large"
                            >
                                Take a picture of your banana!
                            </Button>
                        </div> */}
                    </div>
                </Center>
            </Box>
        </div>
    );
};

export default WelcomePage;