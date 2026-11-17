import Section from '../../components/Section';
import Instructing from '../../components/Instructing';
import LogoEntries from '../../components/LogoEntries';
import { instructing, industrialTraining, courses, leadership, certificates } from '../../data/content';

export const metadata = { title: 'Extracurricular' };

export default function ExtracurricularPage() {
  return (
    <>
      {instructing.length > 0 && (
        <Section id="instruction" title="Course Instruction">
          <Instructing items={instructing} />
        </Section>
      )}

      <Section id="industrial" title="Industrial Training">
        <LogoEntries items={industrialTraining} />
      </Section>

      <Section id="courses" title="Courses & Workshops">
        <LogoEntries items={courses} />
      </Section>

      <Section id="organizations" title="Organizations">
        <LogoEntries items={leadership} />
      </Section>

      {certificates.length > 0 && (
        <Section id="certificates" title="Certificates">
          <LogoEntries items={certificates} />
        </Section>
      )}
    </>
  );
}