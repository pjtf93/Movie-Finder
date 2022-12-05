type Cast = {
  id?: number;
  known_for_department?: string;
  name?: string;
  profile_path?: string;
  character?: string;
};

type CastListType = {
  cast?: Cast[] | undefined;
};

type CastdetailType = {
  name?: string;
  birthday?: string;
  biography?: string;
  known_for_department?: string;
  place_of_birth?: string;
  deathday?: string;
  id?: number;
  profile_path?: string;
};

type CastCreditType = {
  id?: number;
  title?: string;
  poster_path?: string;
  release_date?: string;
  character?: string;
};

type CastCreditListType = {
  credits?: CastCreditType[];
};

export type {
  Cast,
  CastListType,
  CastdetailType,
  CastCreditType,
  CastCreditListType,
};
