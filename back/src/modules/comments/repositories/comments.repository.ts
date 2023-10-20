import { CreateCommentDto } from "../dto/create-comment.dto";
import { Comment } from "../entities/comment.entity";

export abstract class CommentsRepository{
    abstract create(data: CreateCommentDto, user_id: string):Promise<Comment>;
    abstract findAll(): Promise<Comment[]>;
    abstract remove(id: string): Promise<void>;
    abstract findOne(id:string): Promise<Comment>
}

