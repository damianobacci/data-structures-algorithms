import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { StorageIcon } from '@/app/components/icons';
import CodeBlock from '@/app/components/CodeBlock';
import { getExercise } from '@/utils/exercises';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function WhyDataStructuresMatter() {
  const printNumber = getExercise(1, '1_print_number.py');

  return (
    <Box>
      <Chip label="Chapter 1" color="primary" size="small" sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <StorageIcon color="primary" />
        <Typography variant="h4" fontWeight="bold">
          Why Data Structures Matter
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        La struttura dati che scegli determina quali operazioni puoi eseguire sui tuoi dati
        e quanto velocemente puoi eseguirle.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section title="Cos'è una struttura dati?">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Una <strong>struttura dati</strong> è un modo di organizzare i dati in memoria.
          Le strutture dati più semplici sono gli <strong>array</strong>, ma ne esistono molte altre:
          set, hash table, stack, queue, linked list, alberi e grafi.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          La scelta della struttura giusta può far passare un&apos;operazione da <em>lenta</em> a <em>istantanea</em>.
        </Typography>
      </Section>

      <Section title="L'array: la struttura base">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Un array è una lista ordinata di elementi. Le operazioni fondamentali su un array sono:
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          {[
            ['Read', 'leggere un elemento in una posizione specifica'],
            ['Search', 'trovare il valore di un elemento senza conoscerne la posizione'],
            ['Insert', 'aggiungere un elemento in una posizione specifica'],
            ['Delete', 'rimuovere un elemento'],
          ].map(([op, desc]) => (
            <li key={op}>
              <Typography variant="body1">
                <strong>{op}</strong>: {desc}
              </Typography>
            </li>
          ))}
        </Box>
      </Section>

      <Section title="Read: O(1)">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Leggere un elemento da un array è <strong>istantaneo</strong>: il computer conosce
          l&apos;indirizzo in memoria del primo elemento e, dato l&apos;indice, calcola direttamente
          l&apos;indirizzo dell&apos;elemento cercato.
        </Typography>
        <CodeBlock>{'array[3]  // 1 solo step, sempre'}</CodeBlock>
      </Section>

      <Section title="Search: O(N)">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Cercare un valore senza conoscerne l&apos;indice richiede di scorrere l&apos;array elemento
          per elemento. Nel caso peggiore (valore non presente o in ultima posizione), eseguiamo
          tanti step quanti sono gli elementi: <strong>N step</strong>.
        </Typography>
        <CodeBlock>{`// Linear search — worst case: N steps
for (let i = 0; i < array.length; i++) {
  if (array[i] === target) return i;
}`}</CodeBlock>
      </Section>

      <Section title="Insert e Delete">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Inserire o eliminare un elemento <em>in mezzo</em> a un array è costoso: tutti gli
          elementi successivi devono essere shiftati. L&apos;inserimento in fondo è invece O(1).
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Questo è il motivo per cui in certi scenari conviene usare strutture diverse,
          come le <strong>linked list</strong>, che vedremo nei capitoli successivi.
        </Typography>
      </Section>

      <Section title="Set: una variante degli array">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Un <strong>set</strong> è come un array, ma non permette valori duplicati.
          Il costo di questa garanzia è che ogni inserimento richiede prima una ricerca
          (per verificare che il valore non esista già), portando la complessità a <strong>O(N)</strong>.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Quando i duplicati non hanno senso nel tuo dominio, i set sono la scelta giusta.
        </Typography>
      </Section>

      <Section title={`Esercizio — ${printNumber.filename}`}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Due implementazioni per stampare i numeri pari fino a 100. La seconda dimezza
          il numero di step saltando direttamente di 2 in 2.
        </Typography>
        <CodeBlock language={printNumber.language}>{printNumber.code}</CodeBlock>
      </Section>
    </Box>
  );
}
