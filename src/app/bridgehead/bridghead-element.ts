export enum ImageSrcType{
  ASSET,
  BOOTSTRAP
}

export interface BridgheadElement {

  imagesrc: string;
  imageSrcType: ImageSrcType;
  titel: string;
  description: string;
  backendUrl?: string;
  route: string;

}
