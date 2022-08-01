import Card from 'react-bootstrap/Card';
import '../Styles/styles.css'

function Skills() {
    const skills = [
        {
            name: 'Paciencia',
            image: 'https://cdn.bioguia.com/embed/d9cf62a6777382192386252d3828a28841524401878/4_pasos_para_seguir_cuando_estas_por_perder_la_paciencia_que_te_la_devolveran_de_inmediato?imagick=1&size=500',
            description: 'La paciencia es una virtud que se adquiere con el tiempo, pero que se pierde en un instante.',
            info: 'Con los años acumulados de experiencia, he aprendido a ser paciente conmigo mismo y con los demás. No siempre es fácil, pero es una virtud que me ha ayudado a crecer como persona y profesional.'
        },
        {
            name: 'Pasion',
            image: 'http://2.bp.blogspot.com/-qI-LAezbStw/VbuHvLmdZ1I/AAAAAAAAA7U/plqoiECfCvA/s1600/redes-sociales.gif',
            description: 'La pasión es generalmente asociado a un sentimiento tan profundo que desborda la frontera del dolor físico o psicológico.',
            info: 'La pasión es lo que me mueve a seguir aprendiendo y a seguir creciendo como profesional. Me encanta lo que hago y eso me hace sentir muy afortunado.'
        },
        {
            name: 'Trabajo en equipo',
            image: 'http://www.ricardosalinas.com/blog/images/fotoblogene2709.png',
            description: 'El trabajo en equipo es un proceso que se desarrolla a través de la interacción de un grupo de personas que trabajan juntas para alcanzar un objetivo común.',
            info: 'El trabajo en equipo es una de mis habilidades más fuertes. Me gusta trabajar con personas que me ayuden a crecer y a mejorar como profesional.'
        },
        {
            name: 'Resiliencia',
            image: 'https://img.europapress.es/fotoweb/fotonoticia_20140316100133_800.jpg',
            description: 'La resiliencia es la capacidad de una persona para superar las adversidades y seguir adelante.',
            info: 'La resiliencia es una caracteristica que logre con el correr de los años y del superar luchas que parecian perdidas antes de empezar.'
        }
    ]
    return (
        <>
            <div className="skills-container">
                {skills.map((skills, index) => (
                    <Card
                        key={index}
                        style={{ width: '18rem' }}
                        className="mb-2 skills-card"
                    >
                        <Card.Header>My Skill</Card.Header>
                        <Card.Body>
                            <Card.Title>{skills.name}</Card.Title>
                            <Card.Text>
                                {skills.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Skills;