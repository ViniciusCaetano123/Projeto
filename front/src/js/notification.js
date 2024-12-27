
const notificacoes = [{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()},{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()},{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()},{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()},{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()},{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()},{nome:'Jane Foster',log:'Mentioned you in a comment.', date: new Date()}]

const formatDate = function(date){
    return new Intl.DateTimeFormat({language:'pt-Br'}).format(date)
}
const adicionarNotificao = function(){
    $(document).ready(function(){
        const secondElementLi = $('.dropdown-notification-itens');
        console.log('vindo')
        for (let n of notificacoes){
            secondElementLi.append(
                `<li class="dropdown-item">
                    <div>
                        <p class="fs-7">${n.nome}</p>
                        <p class="fs-7">${n.log}</p>
                        <date class="fs-7 font-bold d-flex gap-2 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"></path>
                            </svg>
                            ${formatDate(n.date)}
                        </date>
                    </div>
                </li>
            `);

        }
        
    })
    
}

adicionarNotificao()
