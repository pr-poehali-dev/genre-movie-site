import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'Криминальное чтиво',
    year: 1994,
    rating: 8.9,
    genre: 'Криминал',
    director: 'Квентин Тарантино',
    description: 'Криминальная драма о переплетении судеб персонажей преступного мира Лос-Анджелеса.',
    image: 'https://cdn.poehali.dev/projects/ea432308-6421-46c7-954b-2412b1c6d95d/files/c5734d49-037e-4b41-b983-2860cb2be86d.jpg'
  },
  {
    id: 2,
    title: 'Крёстный отец',
    year: 1972,
    rating: 9.2,
    genre: 'Криминал',
    director: 'Фрэнсис Форд Коппола',
    description: 'Эпическая сага о семье мафиози Корлеоне и их восхождении к власти в Америке.',
    image: 'https://cdn.poehali.dev/projects/ea432308-6421-46c7-954b-2412b1c6d95d/files/2539629d-2eef-44fe-9a8b-38db0e28b49c.jpg'
  },
  {
    id: 3,
    title: 'Славные парни',
    year: 1990,
    rating: 8.7,
    genre: 'Криминал',
    director: 'Мартин Скорсезе',
    description: 'История взлёта и падения гангстера Генри Хилла в мире организованной преступности.',
    image: 'https://cdn.poehali.dev/projects/ea432308-6421-46c7-954b-2412b1c6d95d/files/5075e4c6-5f9f-475f-826d-9efa9213bd93.jpg'
  },
  {
    id: 4,
    title: 'Однажды в Америке',
    year: 1984,
    rating: 8.3,
    genre: 'Криминал',
    director: 'Серджо Леоне',
    description: 'Эпос о дружбе и предательстве еврейских гангстеров в Нью-Йорке на протяжении десятилетий.',
    image: 'https://cdn.poehali.dev/projects/ea432308-6421-46c7-954b-2412b1c6d95d/files/c5734d49-037e-4b41-b983-2860cb2be86d.jpg'
  },
  {
    id: 5,
    title: 'Леон',
    year: 1994,
    rating: 8.5,
    genre: 'Криминал',
    director: 'Люк Бессон',
    description: 'Профессиональный киллер берёт под опеку девочку после убийства её семьи.',
    image: 'https://cdn.poehali.dev/projects/ea432308-6421-46c7-954b-2412b1c6d95d/files/2539629d-2eef-44fe-9a8b-38db0e28b49c.jpg'
  },
  {
    id: 6,
    title: 'Игра',
    year: 1997,
    rating: 7.7,
    genre: 'Криминал',
    director: 'Дэвид Финчер',
    description: 'Богатый банкир получает необычный подарок, который переворачивает его жизнь с ног на голову.',
    image: 'https://cdn.poehali.dev/projects/ea432308-6421-46c7-954b-2412b1c6d95d/files/5075e4c6-5f9f-475f-826d-9efa9213bd93.jpg'
  }
];

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeTab, setActiveTab] = useState<'catalog' | 'rating'>('catalog');

  const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(38 92% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(0 72% 51% / 0.3) 0%, transparent 50%)',
        }}
      />

      <div className="relative">
        <header className="border-b border-border backdrop-blur-md bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon name="Film" size={32} className="text-gold" />
                <h1 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-gold to-cinematic bg-clip-text text-transparent">
                  CinemaVault
                </h1>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={activeTab === 'catalog' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('catalog')}
                  className="gap-2"
                >
                  <Icon name="Grid3x3" size={18} />
                  Каталог
                </Button>
                <Button 
                  variant={activeTab === 'rating' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('rating')}
                  className="gap-2"
                >
                  <Icon name="Trophy" size={18} />
                  Рейтинг
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {activeTab === 'catalog' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-4xl font-bold font-montserrat mb-2">Криминальные шедевры</h2>
                <p className="text-muted-foreground text-lg">
                  Подборка лучших фильмов криминального жанра всех времён
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie, index) => (
                  <Card 
                    key={movie.id}
                    className="group overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/20"
                    onClick={() => setSelectedMovie(movie)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-gold text-background font-bold gap-1">
                        <Icon name="Star" size={14} />
                        {movie.rating}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold font-montserrat mb-2 group-hover:text-gold transition-colors">
                        {movie.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {movie.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Tag" size={14} />
                          {movie.genre}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {movie.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground">
                          Режиссёр: <span className="text-foreground font-medium">{movie.director}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rating' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-4xl font-bold font-montserrat mb-2">Топ рейтинг</h2>
                <p className="text-muted-foreground text-lg">
                  Фильмы отсортированы по рейтингу от высшего к низшему
                </p>
              </div>

              <div className="space-y-4">
                {sortedByRating.map((movie, index) => (
                  <Card 
                    key={movie.id}
                    className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10"
                    onClick={() => setSelectedMovie(movie)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="text-5xl font-bold font-montserrat text-gold/30 min-w-16 text-center">
                          #{index + 1}
                        </div>
                        <img 
                          src={movie.image}
                          alt={movie.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold font-montserrat mb-1 group-hover:text-gold transition-colors">
                            {movie.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span>{movie.year}</span>
                            <span>•</span>
                            <span>{movie.director}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {movie.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Star" size={24} className="text-gold" />
                          <span className="text-3xl font-bold font-montserrat text-gold">
                            {movie.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>

        {selectedMovie && (
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedMovie(null)}
          >
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card/90 backdrop-blur-sm border-gold/30 animate-scale-in">
              <CardContent className="p-0">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                    onClick={() => setSelectedMovie(null)}
                  >
                    <Icon name="X" size={24} />
                  </Button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-5xl font-bold font-montserrat mb-2 text-shadow">
                      {selectedMovie.title}
                    </h2>
                    <div className="flex items-center gap-4 text-lg">
                      <Badge className="bg-gold text-background font-bold gap-1 text-base px-3 py-1">
                        <Icon name="Star" size={16} />
                        {selectedMovie.rating}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {selectedMovie.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Tag" size={16} />
                        {selectedMovie.genre}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1">РЕЖИССЁР</h3>
                    <p className="text-xl font-medium">{selectedMovie.director}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">ОПИСАНИЕ</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {selectedMovie.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
