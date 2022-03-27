import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Name is mandatory'),
    email: yup.string().required().email(),
    password: yup.string().required().min(6, 'At least 6 characters required'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Password confirmation must match password')
})

export default function CreateUser() {
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    });
    const {errors} = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
        console.log(values);
    }

    return(
        <Box>
            <Header />
            <Flex 
                w='100%' 
                my='6' 
                maxW={1480} 
                mx='auto' 
                px='6'
            >
                <Sidebar />
                <Box 
                    as='form'
                    flex='1' 
                    borderRadius={8} 
                    bg='gray.800' 
                    p={['6','8']}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading 
                        size='lg' 
                        fontWeight='normal'
                    >
                        Create User
                    </Heading>
                    <Divider 
                        my='6' 
                        borderColor='gray.700'
                    />

                    <VStack spacing='8'>
                        <SimpleGrid 
                            minChildWidth='240px' 
                            spacing={['6','8']} 
                            w='100%'
                        >
                            <Input name='name' label='Full name' {...register('name')} error={errors.name}/>
                            <Input name='email' type='email' label='Email' {...register('email')} error={errors.email}/>
                        </SimpleGrid>
                        <SimpleGrid 
                            minChildWidth='240px' 
                            spacing={['6','8']}
                            w='100%'
                        >
                            <Input name='password' type='password' label='Password' {...register('password')} error={errors.password}/>
                            <Input name='passwordConfirmation' type='password' label='Confirm Password' {...register('password_confirmation')} error={errors.password_confirmation}/>
                        </SimpleGrid> 
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref><Button as='a' colorScheme='whiteAlpha'>Cancel</Button></Link>
                            <Button type="submit" colorScheme='pink' isLoading={formState.isSubmitting}>Save</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}