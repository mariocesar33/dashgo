import { Box, Drawer, DrawerOverlay, DrawerContent, useBreakpointValue, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();
  
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => {onClose}}>
        <DrawerOverlay >
          <DrawerContent background="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" onClick={onClose} />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  );
};