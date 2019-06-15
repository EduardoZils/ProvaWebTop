import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacina } from '../../models/Vacina';
import { VacinaService } from './vacina.service';
import { AnimalService } from '../../animal/animal/animal.service';
import { Animal } from '../../models/Animal';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {

  vacina: Vacina;
  vacinaModel: Vacina = new Vacina();
  vacinas: Array<Vacina>;
  edit: boolean = false;

  constructor(private vacinaservice: VacinaService,
    private animalservice : AnimalService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private datePipe: DatePipe) { }
    
  public animalList: Array<Animal>;
  
  displayedColumns: string[] = ['actionsColumn', 'IdVacina', 'DtVacina','peso','dosagem','aplicador','DescMedicamento'];
  public dataSource: any;

  ngOnInit() {
    this.vacina = new Vacina();
    this.atualizarAnimalSelect();
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
    this.vacinaservice.getById(id).subscribe(sucesso => {
      if (sucesso) {
        console.log("Sucesso --->");
        console.log(sucesso);
        this.vacinaModel = sucesso;
      } else {
        console.log("Sucesso num foi --->");
        console.log(sucesso);
      }
    })
  }
  salvar() {
    if (this.edit) {
      console.log("Atualiza vacina")
      console.log(this.vacinaModel)
      this.vacinaservice.edit(this.vacinaModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
      },
        error => {
          console.log("Erro");
        });
    } else {
      console.log("salvar vacina")
      console.log(this.vacinaModel)
      this.vacinaservice.save(this.vacinaModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
      },
        error => {
          console.log("Erro");
        });
    }

  }

  listAll(){
    //implementar...

    this.vacinaservice.listAll().subscribe(sucesso => {
      if (sucesso != null) 
        console.log(sucesso);
        this.dataSource = new MatTableDataSource<Vacina>(sucesso);
    },
    error => {
      console.log(error);
    });

  }


  deleteVacina(id : number){
    this.vacinaservice.delete(id).subscribe(sucesso => {
      if (sucesso != null) 
        console.log(sucesso);
        this.listAll();
    },
    error => {
      console.log(error);
    });
  }

  atualizarAnimalSelect() {
    this.animalservice.listAll().subscribe(sucesso => {
        this.animalList = sucesso;
    },
    error => {
      console.log(error);
    });
  }

  voltar() {
    this.router.navigate(['../animal']);
  }
}
