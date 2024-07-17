import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';
import { Tema } from './chatbot_tema';
import { ValidarNombre } from './validacion';

function App() {

  return (
    <ThemeProvider theme={Tema}>
      <div className="chatbot-container">
    <Segment>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hola!, cual es tu nombre?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            validator: ValidarNombre,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hola, {previousValue}!. ¿Qué te gustaría saber?',
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 'acad_admin', label: 'Información Académica y Administrativa', trigger: 'acad_admin' },
              { value: 'campus_recursos', label: 'Recursos y Servicios del Campus', trigger: 'campus_recursos' },
              { value: 'soporte_bienestar', label: 'Apoyo y Bienestar Estudiantil', trigger: 'soporte_bienestar' },
              { value: 'carrera_desarrollo', label: 'Orientación sobre Carrera y Desarrollo Profesional', trigger: 'carrera_desarrollo' },
              { value: 'vida_estudiantil', label: 'Vida Estudiantil y Eventos Sociales', trigger: 'vida_estudiantil' },
            ],
          },
          {
            id: 'acad_admin',
            message: '¿Qué información académica y administrativa necesitas?',
            trigger: 'acad_admin_opciones',
          },
          {
            id: 'acad_admin_opciones',
            options: [
              { value: 'calendario', label: 'Calendario Académico', trigger: 'calendario' },
              { value: 'horario_clases', label: 'Horario de Clases', trigger: 'horario_clases' },
              { value: 'inscripcion', label: 'Períodos de Inscripción', trigger: 'inscripcion' },
            ],
          },
          {
            id: 'calendario',
            message: 'El calendario académico para este semestre incluye fechas importantes como inicio y fin de clases, vacaciones y exámenes. Puedes encontrarlo en el sitio web de la universidad.',
            trigger: 'ayuda',
          },
          {
            id: 'horario_clases',
            message: 'Puedes encontrar tu horario de clases en el portal del estudiante de la universidad, bajo la sección "Mi Horario".',
            trigger: 'ayuda',
          },
          {
            id: 'inscripcion',
            message: 'Los períodos de inscripción para cursos se anuncian al inicio de cada semestre. Consulta el portal del estudiante para más detalles.',
            trigger: 'ayuda',
          },
          {
            id: 'campus_recursos',
            message: '¿Qué recursos y servicios del campus te interesan?',
            trigger: 'campus_recursos_opciones',
          },
          {
            id: 'campus_recursos_opciones',
            options: [
              { value: 'biblio', label: 'Biblioteca y Horarios', trigger: 'biblio' },
              { value: 'serv_es', label: 'Servicios Estudiantiles', trigger: 'serv_es' },
              { value: 'eventos', label: 'Eventos en el Campus', trigger: 'eventos' },
            ],
          },
          {
            id: 'biblio',
            message: 'La biblioteca está ubicada en el edificio central y está abierta de 8 AM a 8 PM de lunes a viernes. Los sábados abre de 9 AM a 5 PM.',
            trigger: 'ayuda',
          },
          {
            id: 'serv_es',
            message: 'Puedes contactar al departamento de servicios estudiantiles enviando un correo a servicios@universidad.edu o visitando su oficina en el edificio administrativo.',
            trigger: 'ayuda',
          },
          {
            id: 'eventos',
            message: 'Esta semana hay un taller de desarrollo profesional el día miércoles y una feria de clubes el viernes. ¡No te lo pierdas!',
            trigger: 'ayuda',
          },
          {
            id: 'soporte_bienestar',
            message: '¿En qué área de apoyo y bienestar estudiantil necesitas ayuda?',
            trigger: 'soporte_bienestar_opciones',
          },
          {
            id: 'soporte_bienestar_opciones',
            options: [
              { value: 'psico', label: 'Ayuda con Estrés o Problemas Emocionales', trigger: 'psico' },
              { value: 'discapacidad', label: 'Recursos para Estudiantes con Discapacidades', trigger: 'discapacidad' },
              { value: 'tutoria', label: 'Servicios de Asesoramiento o Tutoría', trigger: 'tutoria' },
            ],
          },
          {
            id: 'psico',
            message: 'Si estás experimentando estrés o problemas emocionales, puedes acudir al centro de bienestar estudiantil, ubicado en el edificio de servicios estudiantiles.',
            trigger: 'ayuda',
          },
          {
            id: 'discapacidad',
            message: 'La universidad ofrece una variedad de recursos para estudiantes con discapacidades, incluyendo apoyo académico y adaptaciones en el aula. Contacta al departamento de servicios estudiantiles para más información.',
            trigger: 'ayuda',
          },
          {
            id: 'tutoria',
            message: 'Los servicios de tutoría están disponibles para ayudar a mejorar tu rendimiento académico. Puedes inscribirte a través del portal del estudiante.',
            trigger: 'ayuda',
          },
          {
            id: 'carrera_desarrollo',
            message: '¿Qué tipo de orientación sobre carrera y desarrollo profesional necesitas?',
            trigger: 'carrera_desarrollo_opciones',
          },
          {
            id: 'carrera_desarrollo_opciones',
            options: [
              { value: 'pasantias', label: 'Pasantías o Prácticas Profesionales', trigger: 'pasantias' },
              { value: 'cv', label: 'Ayuda con el Currículum Vitae', trigger: 'cv' },
              { value: 'talleres', label: 'Talleres para Entrevistas de Trabajo', trigger: 'talleres' },
            ],
          },
          {
            id: 'pasantias',
            message: 'Puedes encontrar pasantías relevantes para tu carrera a través del portal de empleos de la universidad o contactando a la oficina de desarrollo profesional.',
            trigger: 'ayuda',
          },
          {
            id: 'cv',
            message: 'La universidad ofrece recursos y talleres para ayudarte a escribir tu currículum vitae. Consulta el portal del estudiante para más detalles.',
            trigger: 'ayuda',
          },
          {
            id: 'talleres',
            message: 'Hay talleres disponibles regularmente para prepararte para entrevistas de trabajo. Inscríbete a través del portal del estudiante.',
            trigger: 'ayuda',
          },
          {
            id: 'vida_estudiantil',
            message: '¿Qué aspecto de la vida estudiantil y eventos sociales te interesa?',
            trigger: 'vida_estudiantil_opciones',
          },
          {
            id: 'vida_estudiantil_opciones',
            options: [
              { value: 'clubs', label: 'Clubes y Actividades Extracurriculares', trigger: 'clubs' },
              { value: 'eventos_semanal', label: 'Actividades para el Fin de Semana', trigger: 'eventos_semanal' },
              { value: 'menu', label: 'Opciones de Alimentación en el Campus', trigger: 'menu' },
            ],
          },
          {
            id: 'clubs',
            message: 'En el campus hay una variedad de clubes y actividades extracurriculares, desde deportes hasta arte y tecnología. Consulta el portal de actividades estudiantiles para más información.',
            trigger: 'ayuda',
          },
          {
            id: 'eventos_semanal',
            message: 'Este fin de semana hay una fiesta de bienvenida el sábado y una caminata ecológica el domingo. ¡Únete!',
            trigger: 'ayuda',
          },
          {
            id: 'menu',
            message: 'Las opciones de alimentación en el campus incluyen cafeterías, comedores y varios restaurantes. Consulta el mapa del campus para ubicaciones específicas.',
            trigger: 'ayuda',
          },
          {
            id: 'ayuda',
            message: '¿Puedo ayudarte con algo más?',
            trigger: 'ayuda_opciones',
          },
          {
            id: 'ayuda_opciones',
            options: [
              { value: 'yes', label: 'Sí', trigger: 'msg_regreso' },
              { value: 'no', label: 'No', trigger: 'end' },
            ],
          },
          {
            id: 'msg_regreso',
            message: '¿Sobre que deseas saber?',
            trigger: '4',
          },
          {
            id: 'end',
            message: 'Gracias por usar el chatbot. ¡Que tengas un buen día!',
            end: true,
          },
        ]}
      />
    </Segment>
    </div>
    </ThemeProvider>
  );

}

export default App;