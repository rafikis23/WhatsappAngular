let usuarioActual = -1;
let chatActual = '';
let contactoAgregar = -1;
let contactoChatActual = -1;

(() => {
    const usuarios = [{
            id: 1,
            nombre: "Goku",
            imagen: "goku.jpg",
            contactos: [2, 3],
            conversaciones: [{
                    id: "chat-1-4",
                    ultimoMensaje: "sticker",
                    horaUltimoMensaje: "10:11 PM",
                    nombreDestinatario: "Goku",
                    imagenDestinatario: "goku.jpg"
                },
                {
                    id: "chat-1-2",
                    ultimoMensaje: "yey!",
                    horaUltimoMensaje: "10:13 PM",
                    nombreDestinatario: "Goku",
                    imagenDestinatario: "goku.jpg"
                }
            ]
        },
        {
            id: 2,
            nombre: "Vegeta",
            imagen: "vegeta.jpg",
            contactos: [1, 3],
            conversaciones: [{
                    id: "chat-2-3",
                    ultimoMensaje: "Dolor sit amet",
                    horaUltimoMensaje: "10:12 PM",
                    nombreDestinatario: "Krillin",
                    imagenDestinatario: "krilin.jpg"
                },
                {
                    id: "chat-1-2",
                    ultimoMensaje: "yey!",
                    horaUltimoMensaje: "10:13 PM",
                    nombreDestinatario: "Goku",
                    imagenDestinatario: "goku.jpg"
                }
            ]
        },
        {
            id: 3,
            nombre: "Krillin",
            imagen: "krilin.jpg",
            contactos: [1, 2],
            conversaciones: [{
                id: "chat-2-3",
                ultimoMensaje: "Dolor sit amet",
                horaUltimoMensaje: "10:12 PM",
                nombreDestinatario: "Krillin",
                imagenDestinatario: "krilin.jpg"
            }]
        },
        {
            id: 4,
            nombre: "Shenlong",
            imagen: "shenlong.jpg",
            contactos: [1],
            conversaciones: [{
                id: "chat-1-4",
                ultimoMensaje: "sticker",
                horaUltimoMensaje: "10:11 PM",
                nombreDestinatario: "Goku",
                imagenDestinatario: "goku.jpg"
            }]
        }, {
            id: 5,
            imagen: 'Androide 16.jpg',
            nombre: 'Androide 16',
            contactos: [8, 9, 10],
            conversaciones: []
        },
        {
            id: 6,
            imagen: 'androide_18.jpg',
            nombre: 'Androide 18',
            contactos: [10, 11, 13],
            conversaciones: []
        },
        {
            id: 7,
            imagen: 'androide_19.jpg',
            nombre: 'Androide 19',
            contactos: [],
            conversaciones: []
        },
        {
            id: 8,
            imagen: 'baby.jpg',
            nombre: 'Baby',
            contactos: [],
            conversaciones: []
        },
        {
            id: 9,
            imagen: 'bulma.jpg',
            nombre: 'Bulma',
            contactos: [],
            conversaciones: []
        },
        {
            id: 10,
            imagen: 'cell.jpg',
            nombre: 'Cell',
            contactos: [],
            conversaciones: []
        },
        {
            id: 11,
            imagen: 'chaozu.jpg',
            nombre: 'Chaozu',
            contactos: [],
            conversaciones: []
        },
        {
            id: 12,
            imagen: 'dende.jpg',
            nombre: 'Dende',
            contactos: [],
            conversaciones: []
        },
        {
            id: 13,
            imagen: 'dodoria.jpg',
            nombre: 'Dodoria',
            contactos: [],
            conversaciones: []
        },
        {
            id: 14,
            imagen: 'freezer.jpg',
            nombre: 'Freezer',
            contactos: [],
            conversaciones: []
        },
        {
            id: 15,
            imagen: 'gohan.jpg',
            nombre: 'Gohan',
            contactos: [],
            conversaciones: []
        },
        {
            id: 16,
            imagen: 'goku.jpg',
            nombre: 'Goku',
            contactos: [],
            conversaciones: []
        },
        {
            id: 17,
            imagen: 'goten.png',
            nombre: 'Goten',
            contactos: [],
            conversaciones: []
        },
        {
            id: 18,
            imagen: 'kami.jpg',
            nombre: 'Kami',
            contactos: [],
            conversaciones: []
        },
        {
            id: 19,
            imagen: 'kibito.jpg',
            nombre: 'Kibito',
            contactos: [],
            conversaciones: []
        },
        {
            id: 20,
            imagen: 'krilin.jpg',
            nombre: 'Krilin',
            contactos: [],
            conversaciones: []
        },
        {
            id: 21,
            imagen: 'majinboo.jpg',
            nombre: 'Majinboo',
            contactos: [],
            conversaciones: []
        },
        {
            id: 22,
            imagen: 'mr_satan.jpg',
            nombre: 'Mr Satan',
            contactos: [],
            conversaciones: []
        },
        {
            id: 23,
            imagen: 'nappa.jpg',
            nombre: 'Nappa',
            contactos: [],
            conversaciones: []
        },
        {
            id: 24,
            imagen: 'oolong.jpg',
            nombre: 'Oolong',
            contactos: [],
            conversaciones: []
        },
        {
            id: 25,
            imagen: 'pan.png',
            nombre: 'Pan',
            contactos: [],
            conversaciones: []
        }
    ];

    const stickers = [{
        id: 1,
        sticker: '1.webp',
    }, {
        id: 2,
        sticker: '2.webp'
    }, {
        id: 3,
        sticker: '3.webp'
    }, {
        id: 4,
        sticker: '4.webp'
    }, {
        id: 5,
        sticker: '5.webp'
    }, {
        id: 6,
        sticker: '6.webp'
    }, {
        id: 7,
        sticker: '7.webp'
    }];

    const conversacion1 = [{
            emisor: 4,
            receptor: 1,
            mensaje: "Chat de prueba 1",
            tipo: "text",
            hora: "10:11 PM"
        },
        {
            emisor: 1,
            receptor: 4,
            mensaje: "Respuesta de prueba 1",
            tipo: "text",
            hora: "10:11 PM"
        },
        {
            emisor: 1,
            receptor: 4,
            tipo: "sticker",
            stiker: 4,
            hora: "10:11 PM"
        },
        {
            emisor: 4,
            receptor: 1,
            tipo: "sticker",
            stiker: 7,
            hora: "10:11 PM"
        },
        {
            emisor: 4,
            receptor: 1,
            tipo: "sticker",
            stiker: 5,
            hora: "10:11 PM"
        }
    ];

    const conversacion2 = [{
            emisor: 1,
            receptor: 2,
            tipo: "sticker",
            stiker: 7,
            hora: "10:12 PM"
        },
        {
            emisor: 1,
            receptor: 2,
            mensaje: "Chat chat chat",
            tipo: "text",
            hora: "10:12 PM"
        },
        {
            emisor: 2,
            receptor: 1,
            mensaje: "yey!",
            tipo: "text",
            hora: "10:13 PM"
        }
    ];

    const conversacion3 = [{
            emisor: 3,
            receptor: 2,
            mensaje: "Lorem ipsum",
            tipo: "text",
            hora: "10:12 PM"
        },
        {
            emisor: 3,
            receptor: 2,
            tipo: "sticker",
            stiker: 6,
            hora: "10:12 PM"
        },
        {
            emisor: 2,
            receptor: 3,
            tipo: "sticker",
            stiker: 1,
            hora: "10:12 PM"
        },
        {
            emisor: 2,
            receptor: 3,
            mensaje: "Dolor sit amet",
            tipo: "text",
            hora: "10:12 PM"
        }
    ];

    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('chat-1-4', JSON.stringify(conversacion1));
        localStorage.setItem('chat-1-2', JSON.stringify(conversacion2));
        localStorage.setItem('chat-2-3', JSON.stringify(conversacion3));
        localStorage.setItem('stickers', JSON.stringify(stickers));
    }

    cargarListaUsuarios();
    cargarStickers();
    cargarInfoUsuario(1);
})()

function cargarListaUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let listaUsuarios = document.getElementById('listaUsuarios');

    listaUsuarios.innerHTML = '';

    for (const usr of usuarios) {
        listaUsuarios.innerHTML += `
            <img src="assets/img/profile-pics/${usr.imagen}" onclick="cargarInfoUsuario(${usr.id})" class="rounded-circle regular-avatar" alt="avatar del usuario">
        `;
    }
}

function cargarInfoUsuario(idUsuario) {

    usuarioActual = idUsuario;

    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuariosStorage.find(usr => usr.id == idUsuario) || {};

    document.getElementById('avatarSelectUsuario').setAttribute('src', `assets/img/profile-pics/${usuario.imagen}`);
    mostrarListaUsuarios(false);

    actualizarListaChats(usuario.conversaciones);

    /* usuario.conversaciones.forEach(conv => {
        console.log(conv);

        const idContacto = conv.id.split('-')[2] == usuarioActual ? conv.id.split('-')[1] : conv.id.split('-')[2];
        const destinatario = getInfoUsuario(idContacto);

        listaChats.innerHTML += `
            <div class="chat-item" onclick="cargarConversacion('${conv.id}')">
                <img src="assets/img/profile-pics/${destinatario.imagen}" class="rounded-circle big-avatar">
                <div class="cuerpo-chat">
                    <div class="encabezado-chat">
                        <span>${destinatario.nombre}</span>
                        <span>${conv.horaUltimoMensaje}</span>
                    </div>
                    <span>${conv.ultimoMensaje}</span>
                </div>
            </div>
        `;
    }); */

    mostrarListaChats(true);
    cargarContactosUsuario();
}

function mostrarListaUsuarios(mostrar) {
    document.getElementById('contenedorListaUsuarios').style.display = mostrar ? 'block' : 'none';
}

function toggleListaUsuarios() {
    mostrar = document.getElementById('contenedorListaUsuarios').style.display != 'block' ? true : false;
    document.getElementById('contenedorListaUsuarios').style.display = mostrar ? 'block' : 'none';
}

function mostrarListaChats(mostrar) {
    if (mostrar) {
        document.getElementById('pillsChatsTab').click();
        document.getElementById('contenido').classList.remove('d-none');
        document.getElementById('contenido').classList.add('d-flex');
        //document.getElementById('contenidoChats').classList.remove('d-flex');
        document.getElementById('contenidoChats').classList.add('d-none');
        document.getElementById('chatHeader').classList.remove('d-flex');
        document.getElementById('chatHeader').classList.add('d-none');
        document.getElementById('brandLink').classList.remove('d-none');
        document.getElementById('brandLink').classList.add('d-block');
    } else {
        document.getElementById('contenidoChats').classList.remove('d-none');
        //document.getElementById('contenidoChats').classList.add('d-flex');
        document.getElementById('contenido').classList.remove('d-flex');
        document.getElementById('contenido').classList.add('d-none');
        document.getElementById('chatHeader').classList.remove('d-none');
        document.getElementById('chatHeader').classList.add('d-flex');
        document.getElementById('brandLink').classList.remove('d-block');
        document.getElementById('brandLink').classList.add('d-none');
        document.getElementById('contenedorStickers').style.display = 'none';
        chatActual = -1;
    }
}

function mostrarListaStickers() {
    const mostrar = document.getElementById('contenedorStickers').style.getPropertyValue('display') == 'none' ? true : false;
    document.getElementById('contenedorStickers').style.display = mostrar ? 'block' : 'none';
}

function cargarConversacion(idConversacion) {
    mostrarListaChats(false);

    chatActual = idConversacion;

    const idContacto = idConversacion.split('-')[2] == usuarioActual ? idConversacion.split('-')[1] : idConversacion.split('-')[2];
    contactoChatActual = Number(idContacto);

    const usuarioDest = getInfoUsuario(idContacto);
    console.log('Chat con ', usuarioDest);

    document.getElementById('avatarChatUsuario').setAttribute('src', `assets/img/profile-pics/${usuarioDest.imagen}`);
    document.getElementById('nombreChatUsuario').innerHTML = usuarioDest.nombre;

    const chatStorage = JSON.parse(localStorage.getItem(idConversacion)) || [];
    console.log('Conversacion econtrada ', chatStorage);

    let chatsBody = document.getElementById('chatsBody');

    chatsBody.innerHTML = '';

    chatStorage.forEach(chat => {
        if (chat.tipo == 'text') {
            chatsBody.innerHTML += `
                <div class="chat-bubble ${chat.emisor == usuarioActual ? 'me' : 'contact'}">
                ${chat.mensaje}
                <div class="text-end text-muted">${chat.hora}</div>
                </div>
            `;
        } else {
            chatsBody.innerHTML += `
                <div class="chat-bubble text-center ${chat.emisor == usuarioActual ? 'me' : 'contact'}">
                    <img src="assets/img/stickers/${chat.stiker}.webp" class="sticker-preview">
                    <div class="text-end text-muted">${chat.hora}</div>
                </div>
            `;
        }
    });
}

function cargarContactosUsuario(idUsuario = usuarioActual) {
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuariosStorage.find(usr => usr.id == idUsuario) || {};

    let listaContactos = document.getElementById('listaContactos');
    listaContactos.innerHTML = '';

    usuario.contactos.forEach(idContacto => {
        let contacto = getInfoUsuario(idContacto);

        const conv = 'chat-' + (idContacto > usuarioActual ? `${usuarioActual}-${idContacto}` : `${idContacto}-${usuarioActual}`);

        listaContactos.innerHTML += `
            <div class="contacto-item" onclick="cargarConversacion('${conv}')">
                <img src="assets/img/profile-pics/${contacto.imagen}" class="rounded-circle big-avatar" alt="avatar del usuario">
                <div class="cuerpo-contacto">
                    <span>${contacto.nombre}</span>
                </div>
            </div>
        `;
    });
}

function getInfoUsuario(idUsuario) {
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));

    const { nombre, imagen } = usuariosStorage.find(usr => usr.id == idUsuario);

    return { nombre, imagen };
}

function cargarStickers() {
    const stickerStorage = JSON.parse(localStorage.getItem('stickers')) || [];
    let listaStickers = document.getElementById('listaStickers');
    listaStickers.innerHTML = "";

    stickerStorage.forEach(stk => {
        listaStickers.innerHTML += `
            <img src="assets/img/stickers/${stk.sticker}" class="sticker-preview" alt="sticker" onclick="enviarMensaje('sticker', ${stk.id})">
        `;
    });

    document.getElementById('contenedorStickers').style.display = 'none';
}

function mostrarContactosAgregar() {
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));
    const usuario = usuariosStorage.find(usr => usr.id == usuarioActual);

    const contactosAgregar = usuariosStorage.filter(usr => !usuario.contactos.find(ctc => ctc == usr.id) & usr.id != usuarioActual);

    console.log('Contactos nuevos: ', contactosAgregar);
    let listaContactos = document.getElementById('listaContactosNuevos');
    listaContactos.innerHTML = "";

    contactosAgregar.forEach(ctc => {
        listaContactos.innerHTML += `
            <div class="contacto-item" onclick="setContactoAgregar(${ctc.id}, this)">
                <img src="assets/img/profile-pics/${ctc.imagen}" class="rounded-circle big-avatar" alt="avatar del usuario">
                <div class="cuerpo-contacto">
                    <span>${ctc.nombre}</span>
                </div>
            </div>
        `;
    });
}

function setContactoAgregar(idContacto, el) {
    contactoAgregar = contactoAgregar == idContacto ? -1 : idContacto;
    if (contactoAgregar > -1) {
        el.classList.add('active');
        document.getElementById('btnAgregarContacto').removeAttribute('disabled');
    } else {
        if (el) {
            el.classList.remove('active');
        }
        document.getElementById('btnAgregarContacto').setAttribute('disabled', 'true');
    }
}

function agregarContacto() {

    console.log(`Agregar contacto ${contactoAgregar} a ${usuarioActual}`);

    if (contactoAgregar > -1) {
        let usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));
        usuariosStorage.forEach(usr => {
            if (usr.id == usuarioActual) {
                usr.contactos.push(contactoAgregar);
                localStorage.setItem('usuarios', JSON.stringify(usuariosStorage));
                cargarContactosUsuario(usuarioActual);
                const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                modal.hide();
                return;
            }
        });
    } else {
        return;
    }
}

function enviarMensaje(tipoMensaje, mensaje = '') {
    const fecha = new Date();
    const pm = fecha.getHours() > 12;
    var hora = (pm ? (fecha.getHours() - 12) : fecha.getHours()) + ':' + fecha.getMinutes().toString().padStart(2, '0') + (pm ? ' PM' : ' AM');
    let msg = {};
    if (tipoMensaje == 'sticker') {
        msg = {
            emisor: usuarioActual,
            receptor: contactoChatActual,
            tipo: 'sticker',
            stiker: mensaje,
            hora: hora
        };
    } else {
        msg = {
            emisor: usuarioActual,
            receptor: contactoChatActual,
            mensaje: document.getElementById('chatInput').value,
            tipo: 'text',
            hora: hora
        };
    }

    if (msg.mensaje != '') {
        const chatStorage = JSON.parse(localStorage.getItem(chatActual)) || [];
        chatStorage.push(msg);

        localStorage.setItem(chatActual, JSON.stringify(chatStorage));
        actualizarChatsUsuario(msg);
        cargarConversacion(chatActual);

        document.getElementById('chatInput').value = '';
    }

}

function actualizarChatsUsuario(msg) {
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) || [];

    const destinatario = getInfoUsuario(msg.receptor);

    const idxEmisor = usuariosStorage.findIndex(usr => usr.id == msg.emisor);
    const idxDestinatario = usuariosStorage.findIndex(usr => usr.id == msg.receptor);
    let actDestinatario = false;
    let actEmisor = false;

    console.log('Emisor ', usuariosStorage[idxEmisor]);
    console.log('Receptor ', usuariosStorage[idxDestinatario]);


    if (idxDestinatario > -1) {

        usuariosStorage[idxDestinatario].conversaciones.forEach(conv => {
            if (conv.id == chatActual) {
                console.log(`Actualizando conversación receptor ${conv.id} - ${chatActual}`);
                conv.ultimoMensaje = msg.tipo == 'sticker' ? 'sticker' : msg.mensaje;
                conv.horaUltimoMensaje = msg.hora;
                conv.nombreDestinatario = destinatario.nombre;
                conv.imagenDestinatario = destinatario.imagen;
                actDestinatario = true;
            }
        });

        if (!actDestinatario) {
            console.log(`Actualizando conversación receptor ${chatActual}`);
            usuariosStorage[idxDestinatario].conversaciones.push({
                id: chatActual,
                ultimoMensaje: msg.tipo == 'sticker' ? 'sticker' : msg.mensaje,
                horaUltimoMensaje: msg.hora,
                nombreDestinatario: destinatario.nombre,
                imagenDestinatario: destinatario.imagen
            });
        }
    }

    if (idxEmisor > -1) {
        usuariosStorage[idxEmisor].conversaciones.forEach(conv => {
            if (conv.id == chatActual) {
                console.log(`Actualizando conversación emisor ${conv.id} - ${chatActual}`);
                conv.ultimoMensaje = msg.tipo == 'sticker' ? 'sticker' : msg.mensaje;
                conv.horaUltimoMensaje = msg.hora;
                conv.nombreDestinatario = destinatario.nombre;
                conv.imagenDestinatario = destinatario.imagen;
                actEmisor = true;
            }
        });

        if (!actEmisor) {
            console.log(`Actualizando conversación emisor ${chatActual}`);
            usuariosStorage[idxEmisor].conversaciones.push({
                id: chatActual,
                ultimoMensaje: msg.tipo == 'sticker' ? 'sticker' : msg.mensaje,
                horaUltimoMensaje: msg.hora,
                nombreDestinatario: destinatario.nombre,
                imagenDestinatario: destinatario.imagen
            });
        }

        actualizarListaChats(usuariosStorage[idxEmisor].conversaciones);
    }

    console.log('UsuariosStorage actualizado ', usuariosStorage);
    localStorage.setItem('usuarios', JSON.stringify(usuariosStorage));
}

function actualizarListaChats(chats) {

    let listaChats = document.getElementById('pillsChats');
    listaChats.innerHTML = '';

    chats.forEach(chat => {
        console.log(chat);

        const idContacto = chat.id.split('-')[2] == usuarioActual ? chat.id.split('-')[1] : chat.id.split('-')[2];
        const destinatario = getInfoUsuario(idContacto);

        listaChats.innerHTML += `
            <div class="chat-item" onclick="cargarConversacion('${chat.id}')">
                <img src="assets/img/profile-pics/${destinatario.imagen}" class="rounded-circle big-avatar">
                <div class="cuerpo-chat">
                    <div class="encabezado-chat">
                        <span>${destinatario.nombre}</span>
                        <span>${chat.horaUltimoMensaje}</span>
                    </div>
                    <span>${chat.ultimoMensaje}</span>
                </div>
            </div>
        `;
    });
}