"use client";

import { useState } from "react";
import "../../styles/board.css";

type Card = {
  id: number;
  img: string;
  title: string;
  paragraph: string;
  grid: { rows: number; cols: number; content: string[][] };
};

const cards: Card[] = [
  {
    id: 1,
    img: "/images/1.png",
    title: "عنوان 1",
    paragraph:
      "هذا نص توضيحي طويل تحت الصورة 1. هنا يمكنك كتابة أي وصف تريده.",
    grid: {
      rows: 2,
      cols: 2,
      content: [
        ["A1", "A2"],
        ["A3", "A4"],
      ],
    },
  },
  {
    id: 2,
    img: "/images/3.png",
    title: "عنوان 2",
    paragraph:
      "هذا نص توضيحي طويل تحت الصورة 2. هنا يمكنك كتابة أي وصف تريده.",
    grid: {
      rows: 2,
      cols: 3,
      content: [
        ["B1", "B2", "B3"],
        ["B4", "B5", "B6"],
      ],
    },
  },
  {
    id: 3,
    img: "/images/2.png",
    title: "عنوان 3",
    paragraph:
      "هذا نص توضيحي طويل تحت الصورة 3. هنا يمكنك كتابة أي وصف تريده.",
    grid: {
      rows: 3,
      cols: 2,
      content: [
        ["C1", "C2"],
        ["C3", "C4"],
        ["C5", "C6"],
      ],
    },
  },
  {
    id: 4,
    img: "/images/1.png",
    title: "عنوان 4",
    paragraph:
      "هذا نص توضيحي طويل تحت الصورة 4. هنا يمكنك كتابة أي وصف تريده.",
    grid: {
      rows: 2,
      cols: 2,
      content: [
        ["D1", "D2"],
        ["D3", "D4"],
      ],
    },
  },
  {
    id: 5,
    img: "/images/4.png",
    title: "عنوان 5",
    paragraph:
      "هذا نص توضيحي طويل تحت الصورة 5. هنا يمكنك كتابة أي وصف تريده.",
    grid: {
      rows: 2,
    cols: 3,
      content: [
        ["E1", "E2", "E3"],
        ["E4", "E5", "E6"],
      ],
    },
  },
  {
    id: 6,
    img: "/images/1.png",
    title: "عنوان 6",
    paragraph:
      "هذا نص توضيحي طويل تحت الصورة 6. هنا يمكنك كتابة أي وصف تريده.",
    grid: {
      rows: 3,
      cols: 3,
      content: [
        ["F1", "F2", "F3"],
        ["F4", "F5", "F6"],
        ["F7", "F8", "F9"],
      ],
    },
  },
];

export default function Board() {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <div className="board-page">
      <h1 className="board-title">Board</h1>

      <div className="board-grid">
        {/* row 1 */}
        <div className="board-row">
          <CardComponent card={cards[0]} onOpen={setSelected} />
        </div>

        {/* row 2 */}
        <div className="board-row">
          <CardComponent card={cards[1]} onOpen={setSelected} />
          <CardComponent card={cards[2]} onOpen={setSelected} />
          <CardComponent card={cards[3]} onOpen={setSelected} />
        </div>

        {/* row 3 */}
        <div className="board-row">
          <CardComponent card={cards[4]} onOpen={setSelected} />
          <CardComponent card={cards[5]} onOpen={setSelected} />
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✕
            </button>

            <div className="modal-content">
              <img
                src={selected.img}
                alt={selected.title}
                className="modal-img"
              />

              <div className="modal-text">
                <h2>{selected.title}</h2>
                <p>{selected.paragraph}</p>

                <div
                  className="table"
                  style={{
                    gridTemplateRows: `repeat(${selected.grid.rows}, 1fr)`,
                    gridTemplateColumns: `repeat(${selected.grid.cols}, 1fr)`,
                  }}
                >
                  {selected.grid.content.flat().map((cell, idx) => (
                    <div key={idx} className="table-cell">
                      {cell}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CardComponent({
  card,
  onOpen,
}: {
  card: Card;
  onOpen: (c: Card) => void;
}) {
  return (
    <div className="card" onClick={() => onOpen(card)}>
      <img src={card.img} alt={card.title} className="card-img" />
      <p className="card-title">{card.title}</p>
    </div>
  );
}
