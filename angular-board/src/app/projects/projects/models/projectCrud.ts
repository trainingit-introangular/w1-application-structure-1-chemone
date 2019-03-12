import { Project } from './project';

export interface ProjectCrud {
  //metodos nombre: (nombreparametrorecibe: tipoparametrorecibe) => tipodevuelve
  insertProject: (projectname: string) => void;
  editChanges: (project: Project) => void;
  deleteProject: (id: number) => void;
  filterProject: (id: number) => Project;
}
