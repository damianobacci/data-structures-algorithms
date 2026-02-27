import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { TimelineIcon } from '@/app/components/icons';

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

function ComplexityRow({ notation, name, example }: { notation: string; name: string; example: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'flex-start',
        py: 1.5,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Chip label={notation} size="small" variant="outlined" sx={{ fontFamily: 'monospace', minWidth: 80 }} />
      <Box>
        <Typography variant="body2" fontWeight="bold">{name}</Typography>
        <Typography variant="body2" color="text.secondary">{example}</Typography>
      </Box>
    </Box>
  );
}

export default function BigONotation() {
  return (
    <Box>
      <Chip label="Chapter 3" color="primary" size="small" sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <TimelineIcon color="primary" />
        <Typography variant="h4" fontWeight="bold">
          Yes! Big O Notation
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Un linguaggio universale per descrivere l&apos;efficienza di un algoritmo,
        indipendentemente dall&apos;hardware o dal linguaggio di programmazione.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Section title="Perché ci serve la Big O?">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Dire &quot;questo algoritmo è veloce&quot; non basta: dipende dall&apos;hardware,
          dalla dimensione dell&apos;input, dal carico del sistema. La Big O ci fornisce
          un modo formale per descrivere come cresce il numero di step al crescere di N
          (la dimensione dell&apos;input).
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          La Big O risponde alla domanda: <em>come scala questo algoritmo?</em>
        </Typography>
      </Section>

      <Section title="Le complessità più comuni">
        <ComplexityRow
          notation="O(1)"
          name="Costante"
          example="Leggere un elemento di un array per indice. Il numero di step è sempre 1."
        />
        <ComplexityRow
          notation="O(log N)"
          name="Logaritmica"
          example="Binary Search. Ogni step dimezza lo spazio di ricerca."
        />
        <ComplexityRow
          notation="O(N)"
          name="Lineare"
          example="Linear Search. Nel caso peggiore si visitano tutti gli N elementi."
        />
        <ComplexityRow
          notation="O(N log N)"
          name="Linearitmica"
          example="Merge Sort, Quick Sort (avg). Il più efficiente tra gli algoritmi di ordinamento comparison-based."
        />
        <ComplexityRow
          notation="O(N²)"
          name="Quadratica"
          example="Bubble Sort, Selection Sort. Un ciclo annidato su N elementi."
        />
      </Section>

      <Section title="La regola del caso peggiore">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Per convenzione, la Big O descrive il <strong>caso peggiore</strong>.
          La ricerca lineare è O(N) anche se spesso trovi l&apos;elemento al primo tentativo:
          dobbiamo progettare tenendo conto dello scenario più sfavorevole.
        </Typography>
      </Section>

      <Section title="Si ignorano le costanti">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Un algoritmo che esegue <em>3N</em> operazioni si scrive comunque O(N), non O(3N).
          La Big O cattura solo il <strong>tasso di crescita</strong>, non i coefficienti.
          Questo perché al crescere di N, le costanti diventano irrilevanti rispetto
          all&apos;ordine di grandezza.
        </Typography>
        <Box
          sx={{
            backgroundColor: 'primary.50',
            border: '1px solid',
            borderColor: 'primary.200',
            borderRadius: 1,
            p: 2,
            mt: 1,
          }}
        >
          <Typography variant="body2" color="primary.main" fontWeight="bold">
            Regola pratica
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            O(1) &lt; O(log N) &lt; O(N) &lt; O(N log N) &lt; O(N²) &lt; O(2ᴺ) &lt; O(N!)
          </Typography>
        </Box>
      </Section>
    </Box>
  );
}
