import { Schema, model, Document } from 'mongoose';

export interface IMaterial extends Document {
  reference: string;
  nom: string;
  description?: string;
  unite: string;
  prix_achat_ht: number;
  prix_vente_ht: number;
  conditionnement?: string;
  fournisseur_principal: string;
  date_derniere_maj_prix: Date;
  actif: boolean;
}

const MaterialSchema = new Schema<IMaterial>({
  reference: { type: String, required: true, unique: true },
  nom: { type: String, required: true },
  description: { type: String },
  unite: { type: String, required: true },
  prix_achat_ht: { type: Number, required: true, min: 0 },
  prix_vente_ht: { type: Number, required: true, min: 0 },
  conditionnement: { type: String },
  fournisseur_principal: { type: String, required: true },
  date_derniere_maj_prix: { type: Date, required: true },
  actif: { type: Boolean, default: true }
});

export default model<IMaterial>('Material', MaterialSchema);
