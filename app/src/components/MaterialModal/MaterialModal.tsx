import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
  onSubmit: (data: any) => Promise<void>;
  onEdit: (id: number, data: any) => Promise<void>;
  categories: any[];
  editData: any | null;
}

export default function MaterialModal({
  show,
  onHide,
  onSubmit,
  onEdit,
  categories,
  editData,
}: Props) {
  const [form, setForm] = useState({
    id: 0,
    name: '',
    description: '',
    minimum_stock: 0,
    category_id: 0,
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    } else {
      setForm({
        id: 0,
        name: '',
        description: '',
        minimum_stock: 0,
        category_id: 0,
      });
    }
  }, [editData, show]);

  const handleSave = async () => {
    if (form.id === 0) {
      await onSubmit(form);
    } else {
      await onEdit(form.id, form);
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{form.id === 0 ? 'Crear Material' : 'Editar Material'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          className="mb-3"
          placeholder="Nombre"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <Form.Control
          className="mb-3"
          as="textarea"
          rows={3}
          placeholder="Descripción"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <Form.Control
          className="mb-3"
          type="number"
          placeholder="Stock mínimo"
          value={form.minimum_stock}
          onChange={e => setForm({ ...form, minimum_stock: Number(e.target.value) })}
        />

        <Form.Select
          className="mb-3"
          value={form.category_id}
          onChange={e => setForm({ ...form, category_id: Number(e.target.value) })}
        >
          <option value={0}>Seleccione categoría</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Form.Select>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {form.id === 0 ? 'Crear' : 'Guardar cambios'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
