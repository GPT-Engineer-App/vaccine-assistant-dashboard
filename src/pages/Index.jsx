import React, { useState } from "react";
import { Box, Button, Checkbox, CheckboxGroup, Container, FormControl, FormLabel, Heading, Input, Select, Stack, Text, Link, VStack, HStack } from "@chakra-ui/react";
import { FaSyringe } from "react-icons/fa";

const Index = () => {
  const [selectedProfession, setSelectedProfession] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    gender: "",
    age: "",
    ethnicity: "",
    origin: "",
    riskFactors: [],
  });

  const handleProfessionChange = (e) => setSelectedProfession(e.target.value);

  const handlePatientInfoChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleRiskFactorsChange = (selected) => {
    setPatientInfo((prev) => ({ ...prev, riskFactors: selected }));
  };

  // Dummy function to simulate fetching vaccines information
  const fetchVaccinesInfo = () => {
    // This function would be replaced with an actual API call
    // to fetch vaccines information based on patient data
    return {
      recommendedVaccines: ["Vacuna A", "Vacuna B", "Vacuna C"],
      usageRecommendations: "Administrar una dosis de cada vacuna.",
      followUpConsiderations: "Revisar al paciente después de dos semanas para evaluar efectos secundarios.",
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vaccinesInfo = fetchVaccinesInfo();
    alert(JSON.stringify(vaccinesInfo, null, 2));
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Asesor de Vacunas
        </Heading>
        <Text>Herramienta profesional para identificar necesidades de vacunación personalizada en pacientes inmunocomprometidos.</Text>

        <Box as="form" w="full" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>¿Qué tipo de perfil profesional es usted?</FormLabel>
            <Select placeholder="Seleccione una opción" onChange={handleProfessionChange}>
              <option>Unidad de Medicina Preventiva y Salud Pública</option>
              {/* Other professions options */}
            </Select>
          </FormControl>

          <Stack spacing={4} mt={4}>
            {/* Additional patient information inputs */}
            <FormControl isRequired>
              <FormLabel>Sexo</FormLabel>
              <Select name="gender" onChange={handlePatientInfoChange} placeholder="Seleccione el sexo">
                <option value="male">Varón</option>
                <option value="female">Mujer</option>
              </Select>
            </FormControl>

            {/* Other demographic and clinical inputs */}
            {/* ... */}

            <FormControl isRequired>
              <FormLabel>¿Qué factores de riesgo tiene el paciente?</FormLabel>
              <CheckboxGroup onChange={handleRiskFactorsChange}>
                <VStack alignItems="flex-start">
                  <Checkbox value="cardiopatias">Cardiopatías e hipertensión</Checkbox>
                  {/* Other risk factors options */}
                </VStack>
              </CheckboxGroup>
            </FormControl>

            <Button leftIcon={<FaSyringe />} colorScheme="teal" type="submit">
              Obtener Recomendaciones
            </Button>
          </Stack>
        </Box>

        {/* Results could be displayed here after form submission */}
        {/* ... */}
      </VStack>
    </Container>
  );
};

export default Index;
