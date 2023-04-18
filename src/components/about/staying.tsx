import { Stack, Text, Container, Center } from "@chakra-ui/react";
import CustomButton from "../template/customButton";
import { FaHome } from "react-icons/fa";

export default function Staying() {
  const data = [
    {
      id: 1,
      title: " Permanência",
      content:
        "Na Comunidade Terapêutica Vale da Luz, nossas atividades são pautadas pelo respeito à dignidade da pessoa humana. Mantemos um ambiente seguro, livre de tabaco, álcool, drogas e violência, com o objetivo de proporcionar aos acolhidos um espaço propício para a recuperação. Nossa equipe técnica altamente capacitada oferece orientação e suporte em todas as etapas do processo de recuperação. Nosso principal objetivo é promover o desenvolvimento pessoal dos acolhidos, auxiliando-os na construção de um novo estilo de vida livre da dependência química. Para isso, realizamos atividades que visam conscientizar os acolhidos sobre a dependência química e suas consequências, promover a inserção ou reinserção dos acolhidos no  de trabalho e auxiliar no desenvolvimento de habilidades para a superação de padrões comportamentais nocivos para si mesmo e para outros. Também reconhecemos a espiritualidade como um processo de autoconhecimento, sem impor crenças religiosas, para ajudar os acolhidos a encontrar um sentido mais profundo em suas vidas. Com esse compromisso de cuidar de cada indivíduo de forma única, oferecemos um programa completo e integrado para garantir que os acolhidos possam ter uma recuperação bem-sucedida e duradoura.",
    },
  ];
  return (
    <Container maxW={"6xl"} pb={10}>
      {data.map((c) => (
        <Stack p="4" boxShadow="lg" m="4" borderRadius="xl" key={c.id}>
          <Stack direction="row" as={Center} pb={5}>
            <Text fontSize={"3xl"} fontWeight="semibold">
              {c.title}
            </Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Text fontSize={{ base: "lg" }} textAlign={"justify"} maxW={"6xl"}>
              {c.content}
            </Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} as={Center}>
            <CustomButton route="/" icon={<FaHome />} text="Página Inicial" />
          </Stack>
        </Stack>
      ))}
    </Container>
  );
}
