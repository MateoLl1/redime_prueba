import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useCategories } from './hooks/useCategories';
import { useMaterials } from './hooks/useMaterials';
import { DataTable } from './components/Table/DataTable';
import { AppPagination } from './components/Pagination/Pagination';

function App() {
  const { categories, meta: catMeta, fetchCategories, addCategory } = useCategories();

  const {
    materials,
    meta: matMeta,
    fetchMaterials,
    removeMaterial,
    addMaterial,
    editMaterial,
  } = useMaterials();

  const [categoryName, setCategoryName] = useState('');
  const [materialForm, setMaterialForm] = useState({
    id: 0,
    name: '',
    description: '',
    minimum_stock: 0,
    category_id: 0,
  });

  const resetMaterialForm = () =>
    setMaterialForm({
      id: 0,
      name: '',
      description: '',
      minimum_stock: 0,
      category_id: 0,
    });

  return (
    <Container className="mt-4">
      {/* ============================== */}
      {/* CATEGORÍAS                     */}
      {/* ============================== */}
      <Row>
        <Col>
          <h3>Categorías</h3>

          {/* Crear categoría */}
          <div className="d-flex my-3">
            <input
              className="form-control me-2"
              placeholder="Nueva categoría"
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
            />
            <Button
              onClick={() => {
                if (categoryName.trim()) {
                  addCategory(categoryName);
                  setCategoryName('');
                }
              }}
            >
              Crear
            </Button>
          </div>

          <DataTable columns={['ID', 'Nombre', 'Estado']}>
            {categories.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.status}</td>
              </tr>
            ))}
          </DataTable>

          <AppPagination meta={catMeta} onPageChange={fetchCategories} />
        </Col>
      </Row>

      <hr className="my-5" />

      {/* ============================== */}
      {/* MATERIALES                     */}
      {/* ============================== */}
      <Row>
        <Col>
          <h3>Materiales</h3>

          {/* FORMULARIO MATERIAL */}
          <div className="card p-3 my-3">
            <h5>{materialForm.id === 0 ? 'Crear Material' : 'Editar Material'}</h5>

            <input
              className="form-control mb-3"
              placeholder="Nombre"
              value={materialForm.name}
              onChange={e => setMaterialForm({ ...materialForm, name: e.target.value })}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Descripción"
              value={materialForm.description}
              onChange={e => setMaterialForm({ ...materialForm, description: e.target.value })}
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Stock mínimo"
              value={materialForm.minimum_stock}
              onChange={e =>
                setMaterialForm({
                  ...materialForm,
                  minimum_stock: Number(e.target.value),
                })
              }
            />

            <select
              className="form-control mb-3"
              value={materialForm.category_id}
              onChange={e =>
                setMaterialForm({
                  ...materialForm,
                  category_id: Number(e.target.value),
                })
              }
            >
              <option value={0}>Seleccione categoría</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <div>
              <Button
                className="me-2"
                onClick={() => {
                  if (materialForm.id === 0) {
                    addMaterial(materialForm);
                  } else {
                    editMaterial(materialForm.id, materialForm);
                  }
                  resetMaterialForm();
                }}
              >
                {materialForm.id === 0 ? 'Crear' : 'Actualizar'}
              </Button>

              <Button variant="secondary" onClick={resetMaterialForm}>
                Cancelar
              </Button>
            </div>
          </div>

          <DataTable columns={['ID', 'Nombre', 'Descripción', 'Stock', 'Categoría', 'Acciones']}>
            {materials.map(m => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.description}</td>
                <td>{m.minimum_stock}</td>
                <td>{m.category?.name}</td>
                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    className="me-2"
                    onClick={() =>
                      setMaterialForm({
                        id: m.id,
                        name: m.name,
                        description: m.description,
                        minimum_stock: m.minimum_stock,
                        category_id: m.category_id,
                      })
                    }
                  >
                    Editar
                  </Button>

                  <Button size="sm" variant="danger" onClick={() => removeMaterial(m.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </DataTable>

          <AppPagination meta={matMeta} onPageChange={fetchMaterials} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
