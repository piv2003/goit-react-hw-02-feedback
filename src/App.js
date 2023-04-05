// import PaintingList from './components/PaintingList';
// import Section from './components/Section';

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//       </Section>

//       <Section title="Лучшее"></Section>
//     </div>
//   );
// }

import paintings from './paintings.json';
import PaintingList from 'components/PaintingList';

export default function App() {
  return (
    <div>
      <PaintingList items={paintings} />
    </div>
  );
}
