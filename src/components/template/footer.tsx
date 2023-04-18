import { SocialButton } from "../root/rootModules";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerIcons = [
    {
      label: "Whatsapp",
      icon: FaWhatsapp,
      link: "https://api.whatsapp.com/send?phone=554791793260&text=Entrei%20em%20contato%20pelo%20site.%20",
    },
    {
      label: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/ctvaledaluz",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/valedaluzct/",
    },
    {
      label: "Localização",
      icon: FaMapMarkerAlt,
      link: "https://www.google.com.br/maps/place/Comunidade+Terap%C3%AAutica+Vale+da+Luz/@-26.2971789,-49.0353388,2866m/data=!3m1!1e3!4m5!3m4!1s0x0:0x25c0a454a236bc26!8m2!3d-26.2951575!4d-49.0139072?shorturl=1",
    },
  ];

  return (
    <Box
      bg={useColorModeValue("blue.900", "gray.900")}
      color={useColorModeValue("gray.200", "gray.100")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.900", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            © {currentYear} - Desenvolvido por{" "}
            <Link href="https://www.linkedin.com/in/je4npw/" target="_blank">
              Je4nPw
            </Link>
          </Text>
          <Stack direction={"row"} spacing={6}>
            {footerIcons.map((footericon) => (
              <SocialButton
                key={footericon.label}
                label={footericon.label}
                href={footericon.link}
              >
                <footericon.icon />
              </SocialButton>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
