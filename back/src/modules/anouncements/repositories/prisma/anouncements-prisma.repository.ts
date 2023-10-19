import { PrismaService } from "src/modules/database/prisma.service";
import { CreateAnouncementDto } from "../../dto/create-anouncement.dto";
import { UpdateAnouncementDto } from "../../dto/update-anouncement.dto";
import { Anouncement } from "../../entities/anouncement.entity";
import { AnouncementsRepository } from "../anouncements.repository";
import { plainToInstance } from "class-transformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AnouncementsPrismaRepository implements AnouncementsRepository{
    constructor(private prisma: PrismaService){}
    async create(data: CreateAnouncementDto, user_id:string): Promise<Anouncement> {
        const anouncement = new Anouncement()
        Object.assign(anouncement, {
            ...data,
        });
        const newAnouncement = await this.prisma.anouncements.create({
            data: { 
                id:anouncement.id,
                marca:anouncement.marca,
                modelo:anouncement.modelo,
                ano:anouncement.ano,
                combustivel: anouncement.combustivel,
                quilometragem: anouncement.quilometragem,
                cor:anouncement.cor,
                preco_fipe: anouncement.preco_fipe,
                preco: anouncement.preco,
                descricao:anouncement.descricao,
                user_id,
            },
        });
        return newAnouncement
    }
    async findAll(): Promise<Anouncement[]> {
        const anouncement = await this.prisma.anouncements.findMany()
        return anouncement;
    }
    async findOne(id: string): Promise<Anouncement> {
        const anouncement = await this.prisma.anouncements.findFirst({
            where: { id },

        });
        return anouncement;
    }
    async update(data: UpdateAnouncementDto, anouncement_id: string): Promise<Anouncement> {
        const anouncement = await this.prisma.anouncements.update({
            where: {
                id: anouncement_id,
            },
            data: {...data}
        })
        return anouncement;
    }
    async remove(id: string): Promise<void> {
        await this.prisma.anouncements.delete({
            where: { id },
        });
    }
}