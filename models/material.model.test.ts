import mongoose from 'mongoose';
import Material, { IMaterial } from './material.model';

describe('Material Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/estimtoit_test', { dbName: 'estimtoit_test' });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Material.deleteMany();
  });

  it('should create a valid material', async () => {
    const mat = new Material({
      reference: 'TM-TC-STD',
      nom: 'Tuile mécanique terre cuite standard',
      description: 'Tuile mécanique en terre cuite rouge, dimensions 330x420mm',
      unite: 'pièce',
      prix_achat_ht: 1.75,
      prix_vente_ht: 2.20,
      conditionnement: 'Palette de 240 pièces',
      fournisseur_principal: 'Matériaux Toitures SA',
      date_derniere_maj_prix: new Date('2025-04-15T10:30:00Z'),
      actif: true
    });
    await expect(mat.validate()).resolves.toBeUndefined();
  });

  it('should fail without required fields', async () => {
    const mat = new Material({ prix_achat_ht: 1.5 });
    await expect(mat.validate()).rejects.toThrow();
  });

  it('should fail if prix_achat_ht is negative', async () => {
    const mat = new Material({
      reference: 'NEG-PRICE',
      nom: 'Test',
      unite: 'pièce',
      prix_achat_ht: -1,
      prix_vente_ht: 2,
      fournisseur_principal: 'Fournisseur',
      date_derniere_maj_prix: new Date(),
    });
    await expect(mat.validate()).rejects.toThrow();
  });

  it('should fail if prix_vente_ht is negative', async () => {
    const mat = new Material({
      reference: 'NEG-PRICE-2',
      nom: 'Test',
      unite: 'pièce',
      prix_achat_ht: 1,
      prix_vente_ht: -2,
      fournisseur_principal: 'Fournisseur',
      date_derniere_maj_prix: new Date(),
    });
    await expect(mat.validate()).rejects.toThrow();
  });

  it('should fail if reference is not unique', async () => {
    const mat1 = new Material({
      reference: 'DUPL',
      nom: 'Test',
      unite: 'pièce',
      prix_achat_ht: 1,
      prix_vente_ht: 2,
      fournisseur_principal: 'Fournisseur',
      date_derniere_maj_prix: new Date(),
    });
    const mat2 = new Material({
      reference: 'DUPL',
      nom: 'Test2',
      unite: 'pièce',
      prix_achat_ht: 2,
      prix_vente_ht: 3,
      fournisseur_principal: 'Fournisseur',
      date_derniere_maj_prix: new Date(),
    });
    await mat1.save();
    await expect(mat2.save()).rejects.toThrow();
  });
});
