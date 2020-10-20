const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then( async db => {
    
    // inserir dados na tabela
    /* await saveOrphanage(db, {
        lat: "-5.8154577",
        lng: "-35.2323757",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "998765875",

        images: [

            "https://images.unsplash.com/photo-1565963925128-eebd45213b1f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1580377968109-634820edeb84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    }); */

    // consultar somente 1 orfanato pelo id
   /*  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage) */

    // deletar dados da tabela
    //await db.run('DELETE FROM orphanages')

    // resetar sequência de IDs
    //await db.run("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='orphanages'")

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

})