import { config } from "@gluestack-ui/config";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Box,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
  StyledProvider,
  Image,
  ButtonText,
  Button,
  AlertIcon,
  InfoIcon,
  AlertText,
  Alert,
} from "@gluestack-ui/themed";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";

export default function RecoveryPassword({ navigation }: any) {
  function navToLogin() {
    navigation.navigate("login");
  }


  return (
    <StyledProvider config={config}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        backgroundColor="#e6e6e8"
      >
        <VStack flex={1} padding={4} justifyContent="center">
          <VStack alignItems="center" padding={6}>
            <Image
              alt="logo-provac"
              w="$40"
              h="$24"
              source={require("../../assets/logoprovac2.png")}
              marginBottom="$10"
            />
            <Box
              shadowColor="$amber200"
              w="$full"
              h={'63%'}
              bg="$white"
              borderRadius={8}
              overflow="hidden"
            >
              <HStack
                p="$5"
                bg="$primary500"
                justifyContent="space-between"
                alignItems="center"
                bgColor="$darkBlue500"
                shadowColor="#000"
                shadowOffset={{ width: 0, height: 4 }}
                shadowOpacity={0.9}
                shadowRadius={8}
                elevation={2}
              >
                <VStack>
                  <Heading color="$white" fontSize={25}>
                    Recuperar Senha
                  </Heading>
                  <Text color="$white" fontSize={15}>
                    SGF - Sistema de Gestão de Frota
                  </Text>
                </VStack>
              </HStack>

              <VStack
                w="100%"
                p={6}
                gap={20}
                bg="white"
                shadowColor="#000"
                shadowOffset={{ width: 0, height: 5 }}
                shadowOpacity={0.9}
                shadowRadius={10}
              >
                <Alert
                  mx="$2.5"
                  action="info"
                  variant="solid"
                  marginBottom={15}
                  marginTop={15}
                >
                  <AlertIcon as={InfoIcon} mr="$3" />
                  <AlertText>
                    Informe seu e-mail para receber um link de recuperação de
                    senha
                  </AlertText>
                </Alert>

                <FormControl alignItems="center">
                  <FormControlLabel>
                    <FormControlLabelText position="absolute" right="30%" paddingBottom={"5%"}>E-mail</FormControlLabelText>
                  </FormControlLabel>
                  <Input w="85%">
                    <InputField placeholder="Digite seu e-mail" />
                  </Input>
                </FormControl>

                <Box alignItems="center">
                  <Button
                    w="90%"
                    size="md"
                    bgColor="$darkBlue500"
                    borderRadius={8}
                    marginBottom={15}
                    marginTop={15}
                  >
                    <ButtonText
                      fontWeight="$semibold"
                      fontSize="$lg"
                      paddingRight={8}
                    >
                      Enviar
                    </ButtonText>
                    <SimpleLineIcons
                      name="paper-plane"
                      size={20}
                      color="white"
                    />
                  </Button>

                  <Button
                    size="xs"
                    w="auto"
                    variant="link"
                    marginTop={4}
                    onPress={navToLogin}
                  >
                    <ButtonText
                      fontWeight="$semibold"
                      fontSize={15}
                      color="#1E90FF"
                    >
                      Lembrei minha senha!
                    </ButtonText>
                  </Button>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </ScrollView>
    </StyledProvider>
  );
}
