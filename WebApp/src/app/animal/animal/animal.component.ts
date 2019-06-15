import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/Animal';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalService } from './animal.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal: Animal;
  animalModel: Animal = new Animal();
  animals: Array<Animal>;
  edit: boolean = false;
  

  constructor(private animalservice: AnimalService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

    displayedColumns: string[] = ['actionsColumn', 'containerId', 'descricao'];
    public dataSource: any;
  ngOnInit() {
    this.animal = new Animal();
    this.listAll();
    this.activatedRoute.params.subscribe(
      param => {
        if(param.id != undefined){
        console.log(param);
        this.getById(param.id);
        this.edit = true;
      }
      });
  }


  getById(id: number) {
    this.animalservice.getById(id).subscribe(sucesso => {
      if (sucesso) {
        console.log("Sucesso --->");
        console.log(sucesso);
        this.animalModel = sucesso;
      } else {
        console.log("Sucesso num foi --->");
        console.log(sucesso);
      }
    })
  }
  salvar() {
    if (this.edit) {
      console.log("Atualiza animal")
      console.log(this.animalModel)
      this.animalservice.edit(this.animalModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
        this.router.navigate(['../animal']);
      },
        error => {
          console.log("Erro");
        });
    } else {
      console.log("salvar animal")
      console.log(this.animalModel)
      this.animalservice.save(this.animalModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
        this.router.navigate(['../animal']);
      },
        error => {
          console.log("Erro");
        });
    }

    this.listAll();
  }

  callUpdate(id: number){
    this.router.navigate(['../animal-edit/' +  id]);
  }

  listAll(){
    //implementar...

    this.animalservice.listAll().subscribe(sucesso => {
      if (sucesso != null) 
        console.log(sucesso);
        this.dataSource = new MatTableDataSource<Animal>(sucesso);
    },
    error => {
      console.log(error);
    });
  }
  deleteAnimal(id : number){
    this.animalservice.delete(id).subscribe(sucesso => {
      if (sucesso != null) 
        console.log(sucesso);
        this.listAll();
    },
    error => {
      console.log(error);
    });
  }

  voltar() {
    this.router.navigate(['../vacina']);
  }

}
