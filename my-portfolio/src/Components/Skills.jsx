import '../Styles/styles.css'

function Skills() {
    const skills = [
        {
            name: 'Patience',
            image: 'https://cdn.bioguia.com/embed/d9cf62a6777382192386252d3828a28841524401878/4_pasos_para_seguir_cuando_estas_por_perder_la_paciencia_que_te_la_devolveran_de_inmediato?imagick=1&size=500',
            description: 'La paciencia es una virtud que se adquiere con el tiempo, pero que se pierde en un instante.',
            info: 'With the accumulated years of experience, I have learned to be patient with myself and with others. It is not always easy, but it is a virtue that has helped me grow as a person and a professional.'
        },
        {
            name: 'Passion',
            image: 'http://2.bp.blogspot.com/-qI-LAezbStw/VbuHvLmdZ1I/AAAAAAAAA7U/plqoiECfCvA/s1600/redes-sociales.gif',
            description: 'La pasión es generalmente asociado a un sentimiento tan profundo que desborda la frontera del dolor físico o psicológico.',
            info: 'Passion is what drives me to keep learning and growing as a professional. I love what I do and that makes me feel very fortunate.'
        },
        {
            name: 'Teamwork',
            image: 'http://www.ricardosalinas.com/blog/images/fotoblogene2709.png',
            description: 'El trabajo en equipo es un proceso que se desarrolla a través de la interacción de un grupo de personas que trabajan juntas para alcanzar un objetivo común.',
            info: 'Teamwork is one of my strongest skills. I like to work with people who help me grow and improve as a professional.'
        },
        {
            name: 'Resilience',
            image: 'https://img.europapress.es/fotoweb/fotonoticia_20140316100133_800.jpg',
            description: 'La resiliencia es la capacidad de una persona para superar las adversidades y seguir adelante.',
            info: 'Resilience is a characteristic that I have achieved over the years and overcoming struggles that seemed lost before they began.'
        },
        {
            name: 'Problem solving',
            image: 'https://comunidad.fan/web/uploads/news/934/0-desktop.jpg?1580471450',
            description: 'La resolución de problemas es la fase que supone la conclusión de un proceso más amplio que tiene como pasos previos la identificación del problema y su modelado.',
            info: 'In my case it consists of research in order to find the solution to a problem, it has led me to become a professional.'
        }
    ]
    return (
        <>
            <div className="skills-container">
                {skills.map((skills, index) => (
                    <div key={index} className="card skills-card">
                        <div className="card-image"><img src={skills.image} alt="" /></div>
                        <div className="card-description">
                            <p className="text-title">{skills.name}</p>
                            <p className="text-body">{skills.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;