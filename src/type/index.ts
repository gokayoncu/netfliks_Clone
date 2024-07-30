export interface Movie {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string; // Bu tarih formatı değişkenlik gösterebilir, proje ihtiyacına göre düzenlenebilir
    genre_ids: number[]; // Tüm türler ayrıntılı olarak ayarlanabilir
    id: number;
    name: string;
    origin_country: string[]; // Ülke kodlarının bir dizi olduğunu varsayarız
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}  