import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import {
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
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlHelperText,
} from "@gluestack-ui/themed";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard, Platform } from "react-native";

export default function Login( { navigation }: any ) {

  function navToRecovery() {
    navigation.navigate('recovery')
  }

  return (
    <StyledProvider config={config}>
       <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        paddingTop={"15%"}
        bg="#e6e6e8"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator
        backgroundColor="#e6e6e8"
      >
        <VStack flex={1}>
          <VStack
            flex={1}
            justifyContent="center"
            alignItems="center"
            padding={16}
            bg="#e6e6e8"
          >
            <Image
              alt="logo-provac"
              w="$40"
              h="$24"
              size="2xs"
              source={require("../../assets/logoprovac2.png")}
              marginBottom="$10"
            />
            <Box shadowColor="$amber200" h="80%" w="$full" bg="$white" borderRadius={8}>{/*  =========================================================================================================================================*/}
              <HStack
                p="$5"
                bg="$primary500"
                w={"$full"}
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                borderTopLeftRadius={8}
                borderTopRightRadius={8}
                bgColor="$darkBlue500"
                shadowColor="#000"
                shadowOffset={{ width: 0, height: 4 }}
                shadowOpacity={0.9}
                shadowRadius={8}
                elevation={2}
              >
                <VStack>
                  <Heading color="$white" fontSize={25}>
                    Login
                  </Heading>
                  <Text color="$white" fontSize={15}>
                    SGF - Sistema de Gestão de Frota
                  </Text>
                </VStack>
              </HStack>

              <VStack
                borderColor="black"
                bg="white"
                w={"$full"}
                h={"80%"}
                p={15}
                gap={15}
                borderBottomLeftRadius={8}
                borderBottomRightRadius={8}
                shadowColor="#000"
                shadowOffset={{ width: 0, height: 5 }}
                shadowOpacity={0.9}
                shadowRadius={10}
                marginTop={-3}
              >
                <FormControl minWidth="80%" isRequired={true} paddingLeft={15}>
                  <FormControlLabel>
                    <FormControlLabelText>E-mail</FormControlLabelText>
                  </FormControlLabel>
                  <Input w="$80" h={"$12"}>
                    <InputField placeholder="email@exemplo.com" />
                  </Input>
                  <FormControlHelper>
                    <FormControlHelperText>
                      Digite seu e-mail
                    </FormControlHelperText>
                  </FormControlHelper>
                </FormControl>

                <Box h="$32" w="100%">
                  <FormControl
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                    paddingLeft={15}
                  >
                    <FormControlLabel mb="$1">
                      <FormControlLabelText>Senha</FormControlLabelText>
                    </FormControlLabel>
                    <Input w="$80" h={"$12"}>
                      <InputField 
                        type="password"
                        placeholder="Digite sua senha"
                      />
                    </Input>
                    <FormControlHelper>
                      <FormControlHelperText marginLeft={6}>
                        É necessário ter pelo menos 6 caracteres
                      </FormControlHelperText>
                    </FormControlHelper>
                  </FormControl>
                </Box>

                <Box bg="#0b2a5" alignItems="center">
                  <Button
                    w={280}
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    bgColor="$darkBlue500"
                    borderRadius={8}
                    marginBottom={20}
                  >
                    <ButtonText fontWeight={"$semibold"} fontSize={"$lg"} paddingRight={8}>
                      Entrar
                    </ButtonText>
                    <SimpleLineIcons name="login" size={20} color="white" />
                  </Button>
                  <Button
                    size="xs"
                    w={"90%"}
                    h={"20%"}
                    variant="link"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    borderRadius={8}
                    marginBottom={10}
                    position="relative"
                    top={20}
                    onPress={navToRecovery}
                  >
                    <ButtonText fontWeight={"$semibold"} fontSize={15} w={323} marginLeft={50} color="#1E90FF" marginBottom={0} paddingTop={5}>
                      Esqueceu sua senha?/Primeiro acesso?
                    </ButtonText>
                  </Button>
                </Box>
              </VStack>

            </Box>
          </VStack>
        </VStack>
      </ScrollView>
              </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </StyledProvider>
  );
}
