import { useState } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

import { useCategories } from './hooks/useCategories';
import { useMaterials } from './hooks/useMaterials';

import { DataTable } from './components/Table/DataTable';
import { AppPagination } from './components/Pagination/Pagination';

import CategoryModal from './components/CategoryModal/CategoryModal';
import MaterialModal from './components/MaterialModal/MaterialModal';

function App() {
  const [view, setView] = useState<'materials' | 'categories'>('materials');

  const {
    categories,
    meta: catMeta,
    fetchCategories,
    addCategory,
    editCategory,
    removeCategory,
  } = useCategories();

  const {
    materials,
    meta: matMeta,
    fetchMaterials,
    addMaterial,
    editMaterial,
    removeMaterial,
  } = useMaterials();

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showMaterialModal, setShowMaterialModal] = useState(false);

  const [editCategoryData, setEditCategoryData] = useState<any>(null);
  const [editMaterialData, setEditMaterialData] = useState<any>(null);

  return (
    <Container className="mt-5">
      {/* ========================== */}
      {/* HEADER TABS */}
      {/* ========================== */}
      <div className="d-flex gap-3 mb-4">
        <Button
          variant={view === 'materials' ? 'primary' : 'outline-primary'}
          onClick={() => setView('materials')}
        >
          Materiales
        </Button>

        <Button
          variant={view === 'categories' ? 'success' : 'outline-success'}
          onClick={() => setView('categories')}
        >
          Categorías
        </Button>
      </div>

      {/* ========================== */}
      {/* MATERIALS VIEW */}
      {/* ========================== */}
      {view === 'materials' && (
        <Card className="p-4 shadow-sm">
          <Row className="mb-3">
            <Col>
              <h4>Materiales</h4>
            </Col>
            <Col className="text-end">
              <Button onClick={() => setShowMaterialModal(true)}>+ Crear Material</Button>
            </Col>
          </Row>

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
                    onClick={() => {
                      setEditMaterialData(m);
                      setShowMaterialModal(true);
                    }}
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
        </Card>
      )}

      {/* ========================== */}
      {/* CATEGORIES VIEW */}
      {/* ========================== */}
      {view === 'categories' && (
        <Card className="p-4 shadow-sm">
          <Row className="mb-3">
            <Col>
              <h4>Categorías</h4>
            </Col>
            <Col className="text-end">
              <Button
                variant="success"
                onClick={() => {
                  setEditCategoryData(null);
                  setShowCategoryModal(true);
                }}
              >
                + Crear Categoría
              </Button>
            </Col>
          </Row>

          <DataTable columns={['ID', 'Nombre', 'Estado', 'Acciones']}>
            {categories.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.status}</td>
                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    className="me-2"
                    onClick={() => {
                      setEditCategoryData(c);
                      setShowCategoryModal(true);
                    }}
                  >
                    Editar
                  </Button>

                  <Button size="sm" variant="danger" onClick={() => removeCategory(c.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </DataTable>

          <AppPagination meta={catMeta} onPageChange={fetchCategories} />
        </Card>
      )}

      {/* ========================== */}
      {/* MODALES */}
      {/* ========================== */}

      <CategoryModal
        show={showCategoryModal}
        onHide={() => {
          setShowCategoryModal(false);
          setEditCategoryData(null);
        }}
        onSubmit={addCategory}
        onEdit={editCategory}
        editData={editCategoryData}
      />

      <MaterialModal
        show={showMaterialModal}
        onHide={() => {
          setShowMaterialModal(false);
          setEditMaterialData(null);
        }}
        onSubmit={addMaterial}
        onEdit={editMaterial}
        categories={categories}
        editData={editMaterialData}
      />
    </Container>
  );
}

export default App;
