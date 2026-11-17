import Section from '../../components/Section';
import Projects from '../../components/Projects';
import Gallery from '../../components/Gallery';
import { projects } from '../../data/content';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <Section id="projects" title="Projects">
        <Projects items={projects} />
      </Section>
      <Gallery />
    </>
  );
}