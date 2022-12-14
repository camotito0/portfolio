/* eslint-disable import/no-anonymous-default-export */
import {
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiAngular,
	SiReact,
	SiTypescript,
	SiFirebase,
	SiDocker,
	SiPostgresql,
	SiInsomnia,
	SiFigma,
	SiGithub,
	SiJest
} from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'

export default {
	projects : [
		{
			img: './chat-app-client.jpg' ,
			name : 'Chat app client',
			description : 'Permite iniciar sesión, registrarse y enviar mensajes en canales creados, los mensajes son enviados en tiempo real gracias a sockets!',
			repo: {
				icon : <SiGithub/>,
				link: 'https://github.com/camotito0/LIM018-chat-app'
			},
			technologies: [
				<SiFigma/>,
				<SiReact/>
			]
		},
		{
			img: './chat-app.jpg',
			name : 'Chat app',
			description : 'API Rest creada desde 0, implementada con node, express, jwt, bcrypt, sockets, docker, psql.Consumida por el proyecto Chat-app-client.',
			repo: {
				icon : <SiGithub/>,
				link: 'https://github.com/camotito0/LIM018-chat-app'
			},
			technologies: [
				<SiInsomnia/>,
				<SiDocker/>,
				<SiPostgresql/>,
				<IoLogoNodejs/>
			]
		},
		{
			img: './burger-queen.jpg',
			name : 'Burger Queen',
			description : 'BurgerQueen es una plataforma de gestión de pedidos, enfocada a los empleados de esa hamburguesería.',
			repo: {
				icon : <SiGithub/>,
				link: 'https://github.com/camotito0/LIM018-burger-queen'
			},
			technologies: [
				<SiFigma/>,
				<SiAngular/>,
				<SiTypescript/>,
				<SiFirebase/>
			]
		},
		{
			img: './md-links.jpg',
			name : 'MD Links',
			description : 'Es una linea de comando que te permite obtener información entre otras opciones, sobre los links del archivo/directorio que sean de extensión .md .',
			repo: {
				icon : <SiGithub/>,
				link: 'https://github.com/camotito0/LIM018-md-links'
			},
			technologies: [
				<IoLogoNodejs/>,
				<SiJest/>
			]
		},
		{
			img: './social-network.jpg',
			name : 'Social Network',
			description : 'Red Social sobre adopción de mascotas, te permite iniciar sesión, crear cuenta, crear-editar-eliminar publicaciones.',
			repo: {
				icon : <SiGithub/>,
				link: 'https://github.com/camotito0/LIM018-social-network'
			},
			technologies: [
				<SiJavascript/>,
				<SiHtml5/>,
				<SiCss3/>,
				<SiFigma/>
			]
		}
	]
}