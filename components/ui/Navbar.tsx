import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link, Input, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';


export const Navbar = ({ findUser }: any) => {

    const { theme } = useTheme();

    interface IFormInput {
        name: string
      }

    const {register, formState: { errors }, handleSubmit} = useForm<IFormInput>();

  

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image 
                src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <NextLink href="/" passHref>
                <Link>
                    <Text color='white' h2>G</Text>
                    <Text color='white' h3>itHub</Text>
                </Link>
            </NextLink>

            <Spacer />

            <form onSubmit={handleSubmit(findUser)}>

                <div className='container-search'>
                    <div>
                        <Input 
                            placeholder="Ingrese nombre de usuario"
                            {...register("name" , {
                            required: "Este campo es requerido", 
                            minLength:  { value: 4, message: 'Ingresa al menos 4 carácteres' },
                            })}
                        />
                    </div>
                  

                    <div>
                      {errors?.name && errors.name.message}
                    </div>      
                   
                </div>
                
                <Spacer />           
               
                  <Button size="sm" type='submit'>Buscar</Button>  

                {/* <Input className='button-search' type='submit' value='Buscar'   /> */}


            </form>
            

            <Spacer css={{ flex: 1 }}/>
            
            <NextLink href="/favorites" passHref>
                <Link css={{ marginRight: '10px' }}>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>

        </div>
    )
};
