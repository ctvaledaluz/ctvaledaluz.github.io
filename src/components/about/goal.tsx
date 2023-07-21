import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { Feature } from "./aboutModules";

export default function Goal() {
  const content = [
    {
      id: 1,
      title: "O que Fazemos",
      text: "Buscamos promover ações especializadas de inclusão e/ou reinclusão social de dependentes de drogas " +
        "psicoativas, provocando mudanças de valores que humanizem e desenvolvam suas potencialidades, englobando " +
        "especialmente a família e a comunidade.",
    },
    {
      id: 2,
      title: "O que Entendemos",
      text: "Entendemos que a recuperação de dependentes químicos é um desafio complexo que requer um trabalho " +
        "multidisciplinar, envolvendo profissionais da saúde, assistência social, psicologia e outras áreas afins. " +
        "Para isso, é essencial criar estratégias efetivas de prevenção e tratamento, levando em consideração as" +
        " particularidades de cada indivíduo e sua realidade social e familiar.",
    },
    {
      id: 3,
      title: "O que Queremos",
      text: "Nossos objetivos incluem a melhoria da qualidade de vida dos atendidos e das pessoas ao seu redor," +
        " prevenindo situações de risco, exclusão e o isolamento social. Desejamos que o atendido possa recuperar " +
        "sua autonomia e dignidade, tornando-se um agente transformador em sua comunidade e em sua própria vida.",
    },
  ];

  return (
    <Center>
      <Box p={4} pt={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {content.map((c) => (
            <Feature key={c.id} title={c.title} text={c.text} />
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
}
