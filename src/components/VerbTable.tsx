import { useState } from 'react';
import { VERBS, TYPE_LABELS, TYPE_CSS } from '../data/verbData';
import { Tip } from './Tip';

const TENSES = ['presente', 'passato', 'imperfetto', 'futuro'] as const;
const TENSE_LABELS: Record<string, string> = {
  presente: 'Presente',
  passato: 'Passato Prossimo',
  imperfetto: 'Imperfetto',
  futuro: 'Futuro',
};
const TYPES = ['all', 'are', 'ere', 'ire', 'irreg', 'modal', 'reflex'];
const TYPE_FILTER_LABELS: Record<string, string> = {
  all: 'All Verbs',
  are: '-ARE',
  ere: '-ERE',
  ire: '-IRE',
  irreg: 'Irregular',
  modal: 'Modal',
  reflex: 'Reflexive',
};

type Tense = (typeof TENSES)[number];

export function VerbTable() {
  const [filter, setFilter] = useState('all');
  const [tense, setTense] = useState<Tense>('presente');
  const [search, setSearch] = useState('');

  let filtered = VERBS;
  if (filter !== 'all') filtered = filtered.filter(v => v.type === filter);
  if (search.trim()) {
    const s = search.trim().toLowerCase();
    filtered = filtered.filter(v => v.inf.toLowerCase().includes(s) || v.mean.toLowerCase().includes(s));
  }

  return (
    <div className="unit-page">
      <div className="unit-header">
        <span className="level-badge" style={{ background: '#FEF3C7', color: '#92400E' }}>📊 Reference</span>
        <h2>Verb Conjugation Table</h2>
        <p>All {VERBS.length} verbs across 4 tenses — search, filter by type, and switch tenses.</p>
      </div>
      <div className="lesson">
        <input
          className="verb-search-box"
          type="text"
          placeholder="🔍 Search verbs (e.g. andare, to go…)"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="verb-tense-tabs">
          {TENSES.map(t => (
            <button
              key={t}
              className={`verb-tense-tab ${tense === t ? 'active' : ''}`}
              onClick={() => setTense(t)}
            >
              {TENSE_LABELS[t]}
            </button>
          ))}
        </div>

        <div className="verb-filters">
          {TYPES.map(t => (
            <button
              key={t}
              className={`verb-filter-btn ${filter === t ? 'active' : ''}`}
              onClick={() => setFilter(t)}
            >
              {TYPE_FILTER_LABELS[t]}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text3)', padding: '24px' }}>No verbs match your search.</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '12px' }}>
            <table className="verb-ref-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '130px' }}>Verb</th>
                  <th>io</th>
                  <th>tu</th>
                  <th>lui/lei</th>
                  <th>noi</th>
                  <th>voi</th>
                  <th>loro</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(v => (
                  <tr key={v.inf}>
                    <td>
                      <span className="v-inf">{v.inf}</span>
                      <span className="v-meaning">{v.mean}</span>
                      <span className={`v-type ${TYPE_CSS[v.type]}`}>{TYPE_LABELS[v.type]}</span>
                    </td>
                    {v[tense].map((c, i) => (
                      <td key={i} className="v-conj">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Tip>
        <strong>💡 Tip:</strong> Pronouns: <em>io</em> (I), <em>tu</em> (you), <em>lui/lei</em> (he/she), <em>noi</em> (we), <em>voi</em> (you all), <em>loro</em> (they). In passato prossimo, verbs with <em>essere</em> show agreement: -o/a (sing.), -i/e (plur.).
      </Tip>
    </div>
  );
}
