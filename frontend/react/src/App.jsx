import { Button } from "@chakra-ui/react";
import SidebarWithHeader from "./shared/Sidebar.jsx";

const App = () => {
    return (
        <SidebarWithHeader>
            <Button colorScheme='teal' variant='outline'>Click me</Button>
        </SidebarWithHeader>
    )
}

export default App;