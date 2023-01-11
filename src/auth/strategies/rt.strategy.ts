import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";
import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'rt-secret',
            passReqToCallback: true,

        });
    }
    @ApiProperty({
        example: 'refresh-token'
    })
    validate(req:Request,payload: any){
        const refreshToken = req.get ('authorization').replace('Bearer ', '').trim();
        return{
            ...payload,
            refreshToken,
        }

    }
}