import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
  onSubmit: (name: string) => Promise<void>;
}

export default function CategoryModal({ show, onHide, onSubmit }: Props) {
  const [name, setName] = useState('');

  const handleSave = async () => {
    if (name.trim().length === 0) return;
    await onSubmit(name);
    setName('');
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crear Categoría</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          placeholder="Nombre de categoría"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
