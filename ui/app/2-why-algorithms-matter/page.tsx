import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { PsychologyIcon } from '@/app/components/icons';
import CodeBlock from '@/app/components/CodeBlock';

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

export default function WhyAlgorithmsMatter() {
  return (
    <Box>
      <Chip label="Chapter 2" color="primary" size="small" sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <PsychologyIcon color="primary" />
        <Typography variant="h4" fontWeight="bold">
          Why Algorithms Matter
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        La stessa struttura dati, elaborata con algoritmi diversi, può produrre performance
        radicalmente differenti.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section title="Stessa struttura, algoritmo diverso">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Nel capitolo precedente abbiamo visto che la ricerca lineare su un array richiede
          al massimo <strong>N step</strong>. Ma se l&apos;array è <em>ordinato</em>, possiamo
          fare di meglio con la <strong>Binary Search</strong>.
        </Typography>
      </Section>

      <Section title="Binary Search: O(log N)">
        <Typography variant="body1" sx={{ mb: 2 }}>
          La Binary Search sfrutta l&apos;ordinamento per dimezzare lo spazio di ricerca
          a ogni step. Si parte dal valore centrale: se è quello cercato, abbiamo finito.
          Altrimenti si scarta metà dell&apos;array e si ripete.
        </Typography>
        <CodeBlock>{`function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`}</CodeBlock>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Su un array di 100 elementi: la ricerca lineare può richiedere fino a 100 step,
          la Binary Search al massimo <strong>7</strong> (log₂ 100 ≈ 6.6).
        </Typography>
      </Section>

      <Section title="Il confronto in numeri">
        <Box component="ul" sx={{ pl: 2 }}>
          {[
            ['100 elementi', 'Linear: 100 step', 'Binary: 7 step'],
            ['10.000 elementi', 'Linear: 10.000 step', 'Binary: 13 step'],
            ['1.000.000 elementi', 'Linear: 1.000.000 step', 'Binary: 20 step'],
          ].map(([size, lin, bin]) => (
            <li key={size}>
              <Typography variant="body1">
                <strong>{size}</strong> — {lin} | {bin}
              </Typography>
            </li>
          ))}
        </Box>
      </Section>

      <Section title="Quando si può usare la Binary Search?">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Solo su array <strong>ordinati</strong>. Se l&apos;array non è ordinato,
          bisogna prima ordinarlo — ma se le ricerche sono frequenti, il costo
          di ordinamento viene ammortizzato rapidamente.
        </Typography>
        <Typography variant="body1">
          Questo dimostra che la scelta dell&apos;algoritmo è spesso inseparabile
          dalla scelta della struttura dati: insieme determinano le performance
          complessive del programma.
        </Typography>
      </Section>
    </Box>
  );
}
