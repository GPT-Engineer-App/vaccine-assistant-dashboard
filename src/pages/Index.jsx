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
            <Select name="profession" placeholder="Seleccione una opción" onChange={handleProfessionChange}>
              <option value="preventiva">Unidad de Medicina Preventiva y Salud Pública</option>
              <option value="vacunacion-internacional">Centro de Vacunación Internacional</option>
              <option value="gestor-salud-publica">Gestor de Salud Pública</option>
              <option value="atencion-primaria">Atención primaria</option>
              <option value="prevencion-riesgos-laborales">Prevención de riesgos laborales</option>
              <option value="sociedad-cientifica">Sociedad científica</option>
              <option value="industria-farmaceutica">Industria Farmacéutica</option>
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

            <FormControl isRequired>
              <FormLabel>Edad</FormLabel>
              <Input name="age" type="number" onChange={handlePatientInfoChange} placeholder="Ingrese la edad en años" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Raza/grupo étnico</FormLabel>
              <Select name="ethnicity" onChange={handlePatientInfoChange} placeholder="Seleccione la raza/grupo étnico">
                <option value="caucasico">Caucásico</option>
                <option value="negro">Negro</option>
                <option value="asiatico">Asiático</option>
                <option value="mestizo">Mestizo</option>
                {/* Other ethnic groups if necessary */}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Procedencia</FormLabel>
              <Select name="origin" onChange={handlePatientInfoChange} placeholder="Seleccione la procedencia">
                <option value="residente">Residente</option>
                <option value="extranjero">Extranjero</option>
                {/* Include all continent options */}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Comunidad Autónoma</FormLabel>
              <Select name="community" onChange={handlePatientInfoChange} placeholder="Seleccione la CC.AA">
                {/* List all autonomous communities */}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>¿Qué factores de riesgo tiene el paciente?</FormLabel>
              <CheckboxGroup onChange={handleRiskFactorsChange}>
                <VStack alignItems="flex-start">
                  <Checkbox value="cardiopatias">Cardiopatías e hipertensión</Checkbox>
                  <Checkbox value="enfermedades-cronicas">Enfermedades crónicas</Checkbox>
                  <Checkbox value="enfermedades-pulmonares">Enfermedades pulmonares crónicas</Checkbox>
                  <Checkbox value="diabetes">Diabetes</Checkbox>
                  <Checkbox value="trasplante-organo">Trasplante de órgano sólido y/o líquido</Checkbox>
                  <Checkbox value="inmunosupresion-secundaria">Inmunosupresión secundaria</Checkbox>
                  <Checkbox value="inmunosupresion-primaria">Inmunosupresión primaria</Checkbox>
                  <Checkbox value="enfermedad-autoinmune">Enfermedad autoinmune</Checkbox>
                  <Checkbox value="cancer">Cáncer</Checkbox>
                  <Checkbox value="hipercolesterolemia-obesidad">Hipercolesterolemia y/o obesidad mórbida</Checkbox>
                  <Checkbox value="nino-pretermino">Niño nacido pre-término</Checkbox>
                  <Checkbox value="edad-avanzada">Edad avanzada</Checkbox>
                  <Checkbox value="eventos-adversos-inmunizacion">Paciente con eventos adversos tras inmunización</Checkbox>
                  <Checkbox value="riesgo-ocupacional">Paciente con riesgo ocupacional</Checkbox>
                  <Checkbox value="paciente-viajero">Paciente que va a viajar</Checkbox>
                  <Checkbox value="embarazo-lactancia">Embarazo y/o lactancia</Checkbox>
                  {/* Add more risk factors as needed */}
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
