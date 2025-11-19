import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
  onSubmit: (name: string) => Promise<void>;
  onEdit: (id: number, name: string) => Promise<void>;
  editData: any | null;
}

export default function CategoryModal({ show, onHide, onSubmit, onEdit, editData }: Props) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editData) {
      setName(editData.name);
    } else {
      setName('');
    }
  }, [editData, show]);

  const handleSave = async () => {
    if (name.trim().length === 0) return;

    if (editData) {
      await onEdit(editData.id, name);
    } else {
      await onSubmit(name);
    }

    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{editData ? 'Editar Categoría' : 'Crear Categoría'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          placeholder="Nombre de la categoría"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>

        <Button variant={editData ? 'primary' : 'success'} onClick={handleSave}>
          {editData ? 'Guardar cambios' : 'Crear'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
